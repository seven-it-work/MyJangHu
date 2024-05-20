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

    descriptionStr(): string {
        const magnification = this.isGold ? 2 : 1;
        return `每回合中，有${this.refreshTimes * magnification}次刷新会消耗生命值，而非铸币。（还剩${this.remainRefreshTimes}次！）`;
    }


    whenEndRound(triggerObj: TriggerObj) {
        const magnification = this.isGold ? 2 : 1;
        this.remainRefreshTimes = this.refreshTimes * magnification;
    }
}
