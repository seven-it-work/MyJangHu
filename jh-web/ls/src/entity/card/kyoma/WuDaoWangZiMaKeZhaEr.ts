import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import randomUtil from "../../../utils/RandomUtils.ts";
import BaseCardObj from "../../../objs/BaseCardObj.ts";

export default class WuDaoWangZiMaKeZhaEr extends BaseCard {
    name = "舞蹈王子玛克扎儿"
    ethnicity = ["恶魔"]
    attack = 6
    life = 3
    graded = 4
    description = "每回合中，有2次刷新会消耗生命值，而非铸币。（还剩2次！）"
    refreshTimes: number = 2;
    // 剩余刷新消耗生命值次数
    remainRefreshTimes: number = 2;

    whenEndRound(triggerObj: TriggerObj) {
        this.remainRefreshTimes = this.refreshTimes;
    }
}
