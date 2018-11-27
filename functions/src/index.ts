import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
import * as cors from 'cors';

const corsHandler = cors({origin: true})
admin.initializeApp();
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

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

export const messageNotice = functions.database.ref('/notice/{userId}/{category}').onUpdate(
  (change: functions.Change<functions.database.DataSnapshot>, event: functions.EventContext)=>{
    let menuTitle:string = "";
    if(event.params.category === "customerTab"){
      menuTitle = "customer";
    }
    else if(event.params.category === "infoTab"){
      menuTitle = "info";
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
        body: menuTitle + "に新規メッセージがあります",
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