/**
 * noticeテーブル用インターフェース
 * @param customerTab Tabメニュ- customerに表示する通知の数
 * @param infoTab　Tabメニュ- infoに表示する通知の数
 */
export interface INotice {
  customerTab:number,
  infoTab:number,
}

/**
 * アシスタントマネージャー用noticeクラス
 * @param customerTab Tabメニュ- customerに表示する通知の数
 * @param infoTab　Tabメニュ- infoに表示する通知の数
 * @param agentList 各エージェントごとの通知バッチ数. key: バッチ表示対象者uid, value: 対象者のバッチ表示数
 */
export class AssitantNotice implements INotice{
  customerTab:number
  infoTab:number
  agentList: {[agentId: string]: number}
}
