/**
 * bot, historyChatテーブルデータ用インターフェース
 * @param createdAt 対象詳細報告の作成日
 * @param postId 対象詳細報告の投稿者uid
 * @param body 対象詳細報告の投稿メッセージ
 * @param imgUrl 対象詳細報告の投稿画像URL
 */
export interface IMessage {
  body?: string,
  postId?: string,
  createdAt?: number,
}

/**
 * botテーブルデータ用クラス
 * @param createdAt 対象詳細報告の作成日
 * @param postId 対象詳細報告の投稿者uid
 * @param body 対象詳細報告の投稿メッセージ
 */
export class Bot implements IMessage{
  body?: string;
  postId?: string;
  createdAt?: number;

  constructor(userId: string, body: string) {
    this.createdAt = new Date().getTime();
    this.postId = userId;
    this.body = body;
  }
}

/**
 * historyChatテーブルデータ用クラス
 * @param createdAt 対象詳細報告の作成日
 * @param postId 対象詳細報告の投稿者uid
 * @param body 対象詳細報告の投稿メッセージ
 * @param imgUrl 対象詳細報告の投稿画像URL
 */
export class HistoryChat implements IMessage{
  body?: string;
  postId?: string;
  createdAt?: number;
  imgUrl?:string; 

  constructor(userId: string, body: string) {
    this.createdAt = new Date().getTime();
    this.postId = userId;
    this.body = body;
  }
}