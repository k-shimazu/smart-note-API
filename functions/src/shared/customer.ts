/**
 * 顧客テーブルデータ用インターフェース
 * @param address 対象顧客の住所
 * @param age 対象顧客の年齢
 * @param agentId 対象顧客のエージェントuid
 * @param birthday 対象顧客の誕生日
 * @param cardImgFrontUrl 名刺（表）等の画像URL
 * @param cardImgBackUrl 名刺（裏）等の画像URL
 * @param checkboxFg 顧客一覧横のチェックボックス用フラグ
 * @param colorStatus 顧客一覧横のカラーボックス用
 * @param companyAddress 対象顧客の勤務先住所
 * @param companyEmail 対象顧客の勤務先メールアドレス
 * @param companyName 対象顧客の勤務先名
 * @param companyTel 対象顧客の勤務先電話番号
 * @param family 対象顧客の家族構成
 * @param firstName 対象顧客のファーストネーム
 * @param followDate 対象顧客のフォロー日
 * @param gender 対象顧客の性別
 * @param lastApo 対象顧客の最終アポイント日
 * @param lastName 対象顧客のラストネーム
 * @param mainCustomerId 対象顧客の世帯主ID（relationshipが本人以外の場合）
 * @param memo 対象顧客に対する自分メモ情報. key: 記入日, value: メモ内容
 * @param middleName 対象顧客のミドルネーム
 * @param relationship 対象顧客の続柄
 * @param productStatus 対象顧客の商品情報
 *  @param maturityDate 対象商品の満期日
 *  @param name 対象商品名
 *  @param state 対象商品の状態
 * @param tel 対象顧客の電話番号
 */
export interface ICustomer {
  address?: string,
  age?: number,
  agentId: string,
  birthday?: number,
  cardImgFrontUrl?: string,
  cardImgBackUrl?: string,
  checkboxFg?: boolean,
  colorStatus?: number,
  companyAddress?: string,
  companyEmail?: string,
  companyName?: string,
  companyTel?: string,
  createdAt?: number,
  email?: string,
  family?: { [customerId: number]: number },
  firstName?: string,
  followDate?: number,
  gender?: string,
  lastApo?: number,
  lastName?: string,
  mainCustomerId?: number,
  memo?: { [createdAt: number]: string },
  middleName?: string,
  relationship?: string,
  productStatus?: {
    maturityDate: number,
    name: string,
    state: number,
  }[],
  tel?: string,
  notice?: { [uid: string]: number }
}

export class Customer implements ICustomer {
  address: string = '';
  age: number = null;
  agentId: string = '';
  birthday: number = null;
  cardImgFrontUrl: string = '';
  cardImgBackUrl: string = '';
  checkboxFg: boolean = false;
  colorStatus: number = 0;
  companyAddress: string = '';
  companyEmail: string = '';
  companyName: string = '';
  companyTel: string = '';
  createdAt: number = null;
  email: string = '';
  family: { [customerId: number]: number } = {};
  firstName: string = '';
  followDate: number = null;
  gender: string = '';
  lastApo: number = null;
  lastName: string = '';
  mainCustomerId: number = null;
  memo: { [createdAt: string]: string } = {};
  middleName: string = '';
  nextApo: string = '';
  relationship: string = '';
  productStatus: {
    maturityDate: number;
    name: string;
    state: number;
  }[] = [];
  tel: string = '';
  notice: { [uid: string]: number } = {};

  constructor(customer: ICustomer) {
    for (const key of Object.keys(customer)) {
      this[key] = customer[key];
    }

    if (!this.createdAt) {
      this.createdAt = (new Date()).getTime();
    }
  }
}
