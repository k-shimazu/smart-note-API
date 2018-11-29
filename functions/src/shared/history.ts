/**
 * historyテーブルデータ用インターフェース
 * @param content 対象活動履歴の内容
 * @param correspondingDate 対象活動履歴の対応日
 * @param createdAt 対象活動履歴の作成日
 * @param followDate 対象活動履歴のフォロー日
 * @param how 対象活動履歴の方法
 * @param imgs 対象活動履歴の添付画像URLのリスト
 * @param memo 対象活動履歴メモ
 * @param nextApoAllDayFg 対象活動履歴の次回アポイント終日フラグ
 * @param nextApoDate 対象活動履歴の次回アポイント日
 * @param nextApoStartTime 対象活動履歴の次回アポイント開始日時
 * @param nextApoEndTime 対象活動履歴の次回アポイント終了日時
 * @param place 対象活動履歴の活動場所
 * @param promotionalProducts 対象活動履歴の使用販促品のリスト
 * @param tool 対象活動履歴の使用商品ツール
 */
export interface IHistory {
  contents?: string[],
  correspondingDate?: number,
  createdAt?: number,
  followDate?: number,
  how?: string,
  imgs?: string[],
  memo?: string,
  nextApoAllDayFg?: boolean,
  nextApoDate?: number,
  nextApoStartTime?: number,
  nextApoEndTime?: number,
  place?: string,
  promotionalProducts?: string[],
  tools?: string[],
}
