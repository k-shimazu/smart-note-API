
/**
 * batchデータインターフェース
 * @param apoAlert アポイントメント通知設定(次回アポイント予定日の何日前に通知するか)
 * @param birthdayAlert 誕生日通知設定(誕生日の何日前に通知するか)
 * @param followAlert フォロー日通知設定(最終対応日の何日後に通知するか)
 * @param maturityAlert 満期日通知設定(満期日の何日前に通知するか)
 * @param lastLogin 最終ログイン日
 */
export interface IBatch {
    apoAlert?: Number,
    birthdayAlert?: Number,
    followAlert?: Number,
    maturityAlert?: Number,
    lastLogin?: Number
}
