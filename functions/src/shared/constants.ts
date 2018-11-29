import { IBatch } from "./batch";
import { INotice } from "./notice";


export class Constants {

  public static readonly FAQ_BOT_ID = "123456789";
  public static readonly FAQ_BOT_TOKEN = '598d90e70b274c7b8a20cfa1dd1ce93b'
  public static readonly NOTIFICATION_TIME = 120; // リマインダ時間の何分前に通知するか
  public static readonly INCREMENT_VALUE:number=1; 
  public static readonly DECREMENT_VALUE_ONE: number = -1;
  public static readonly CUSTOMER_TAB = "customerTab";
  public static readonly INFO_TAB = "infoTab";

  public static readonly BATCH_DEFAULT_VALUE: IBatch = {  //通知設定の初期値
    apoAlert: 7,
    birthdayAlert: 56,
    followAlert: 180,
    maturityAlert: 90,
    lastLogin: -32400
  };

  public static readonly NOTICE_DEFAULT_VALUE: INotice ={
    customerTab: 0,
    infoTab: 0,
  }

  
}