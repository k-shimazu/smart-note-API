/**
 * infoテーブルデータ用インターフェース
 * @param alreadyReaders 対象連絡事項を確認したユーザー一覧
 * @param body 対象連絡事項の連絡情報
 * @param createdAt 対象連絡事項の作成日
 * @param postId 対象連絡事項の投稿者uid
 */
export interface IInfo {
  alreadyReaders: {[uid: string]: string},
  body: string,
  createdAt: number,
  postId: string
}

export class Info implements IInfo{
  alreadyReaders: {[uid: string]: string}
  body: string
  createdAt: number
  postId: string

  constructor(userId: string, body: string, alreadyReaders) {
    this.createdAt = new Date().getTime();
    this.postId = userId;
    this.body = body;
    this.alreadyReaders = alreadyReaders;    
  }
}