import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class WuDaoWangZiMaKeZhaErV28 extends BaseCard {
    name = "舞蹈王子玛克扎儿"
    ethnicity = ["恶魔"]
    attack = 6
    life = 3
    graded = 4
    refreshTimes: number = 2;
    // 剩余刷新消耗生命值次数
    remainRefreshTimes: number = 2;
    private _description = `每回合中，有2次刷新会消耗生命值，而非铸币。（还剩${this.remainRefreshTimes}次！）`


    get description(): string {
        return `每回合中，有2次刷新会消耗生命值，而非铸币。（还剩${this.remainRefreshTimes}次！）`;
    }


    whenEndRound(triggerObj: TriggerObj) {
        this.remainRefreshTimes = this.refreshTimes;
    }
}
