import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
import * as cors from 'cors';
import {Constants} from './shared/constants'
import { IUserProfile } from './shared/user-profile';

const corsHandler = cors({origin: true})
admin.initializeApp();

export const regularPush = functions.https.onRequest((request, response) => {
  corsHandler(request, response, ()=>{
     if(request.method==='GET'){
       admin.database().ref("/userProfile").once("value")
       .then((snapshot)=>{
         const users = snapshot.val();
               const array = Object.keys(users).map(key => users[key]);
  
               console.log("reference success", array);
               response.status(200).send(array).end();
       })
       .catch(error=>{
         console.log(error);
         response.status(500).send(error);
       })
     }
     else{
       response.send(request.body);
     }
   })
 })

 /**
 * 未読メッセージ受信時プッシュ通知用
 */
export const messageNotice = functions.database.ref('/notice/{userId}/{category}').onUpdate(
  (change: functions.Change<functions.database.DataSnapshot>, event: functions.EventContext)=>{
    let menuTitle:string = "";
    if(event.params.category === Constants.CUSTOMER_TAB){
      menuTitle = "活動履歴";
    }
    else if(event.params.category === Constants.INFO_TAB){
      menuTitle = "infoメニュー";
    }
    else{
      //agentList配下の更新に対しては通知しない
      return;
      }
    if(change.before.val() > change.after.val()){
      //デクリメント時は通知しない
      return;
    }
    const userId = event.params.userId;
    const payload: admin.messaging.MessagingPayload = {
      notification:{
        title: "smart note",
        body: menuTitle + "に新規の投稿があります",
        badge: "1",
        sound:"default",
        //icon: "assets/imgs/logo.png"
      }
    };
    admin.database().ref(`/userProfile/${userId}/fcmToken`).once("value")
    .then(
      (snapshot: functions.database.DataSnapshot)=>{
        const token = snapshot.val();
        if(!token){
          return;
        }
        admin.messaging().sendToDevice(token, payload, {priority: "high"})
        .then(pushResponse=>{
          console.log("Successfully sent message to ", userId, ":", pushResponse);
        })
        .catch(error=>{
          console.log("Error sending message to ", userId, ":", error);
        })      
    })
    .catch(error=>{
      console.log("Error reading token of ", userId, ":", error);
    })  
})

/**
 * ユーザ登録用のHttpリクエストファンクション
 */
export const registorUser = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async ()=>{
     if(request.method==='POST'){
       //postリクエストのbodyをJSONで受け取る
       const data:{email:string, password:string, newSuperior:string, userProfile:IUserProfile} = JSON.parse(request.body);
       console.log(data);
       if(!data){
         return;
       }
       try{
        const userRecord :admin.auth.UserRecord = await admin.auth().createUser({
          email: data.email, 
          emailVerified: true, 
          password: data.password,
        });
        console.log(userRecord);
        data.userProfile.userId = userRecord.uid;
        console.log("userId:" + userRecord.uid);
        //初期処理（ユーザプロファイル登録、指定された上司の部下に、作成ユーザのuidを登録、batchテーブルの初期化、noticeテーブルの初期化
        await Promise.all([
         admin.database().ref(`/userProfile/${userRecord.uid}`).set(data.userProfile),
         admin.database().ref(`/userProfile/${data.newSuperior}/subordinates/${userRecord.uid}`).set(userRecord.uid),
         admin.database().ref(`/notice/${userRecord.uid}`).set(Constants.NOTICE_DEFAULT_VALUE),
         admin.database().ref(`/batch/${userRecord.uid}`).set(Constants.BATCH_DEFAULT_VALUE)
        ])
        console.log("success")
        response.status(200).send({message: "success"});
       }
       catch(error){
        response.status(500).send(error)
       }
      }
     else return;
   })
 })