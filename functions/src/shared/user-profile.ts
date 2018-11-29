
/**
 * userProfileテーブルデータ用インターフェース
 * @param departmentId 対象ユーザーの所属部署ID
 * @param email 対象ユーザーのメールアドレス
 * @param role 対象ユーザーの権限レベル
 * @param firstName 対象ユーザーのファーストネーム
 * @param firstNameYomi 対象ユーザーのファーストネームの読み
 * @param lastName 対象ユーザーのラストネーム
 * @param lastNameYomi 対象ユーザーのラストネームの読み
 * @param middleName 対象ユーザーのミドルネーム
 * @param middleNameYomi 対象ユーザーのミドルネームの読み
 * @param joined 対象ユーザーの入社日時
 * @param superiors 対象ユーザーの上司一覧. key: 上司uid, value: 上司uid
 * @param subordinates 対象ユーザーの部下一覧. key: 部下uid, value: 部下uid
 * @param deletedAt 対象ユーザーの削除日
 * @param dispFg 対象ユーザの表示有無、2段階目の削除でTrueとなり、表示なし扱い
 * @param userId 対象ユーザーのuid
 */
export interface IUserProfile {
    departmentId?: string,
    email?: string,
    role?: number,
    firstName?: string,
    firstNameYomi?: string,
    lastName?: string,
    lastNameYomi?: string,
    joined?: string,
    superiors?: {[uid: string]: string},
    subordinates?: {[uid: string]: string},
    deletedAt?: number,
    dispFg?: boolean,
    fcmToken?: string,
    userId: string,
}