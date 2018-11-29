/**
 * 各種マスターテーブル用インターフェース
 * @param createdAt 対象項目の作成日
 * @param deletedAt 対象項目の削除日
 * @param name 対象項目の名前
 */
export interface IMaster {
  createdAt: string,
  deletedAt: string,
  name: string,
}
