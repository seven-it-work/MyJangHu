import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import BaseCardObj from "../../../objs/BaseCardObj";

export default class LiangChanXingKongHeJi extends BaseCard {
    name = "量产型恐吓机"
    ethnicity = ["机械"]
    attack = 3
    life = 2
    graded = 3
    description = "<div><b>圣盾</b></div><b>亡语</b>：召唤三个1/1的微型机器人。"

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        for (let i = 0; i < 3; i++) {
            currentPlayer.cardListInFighting.push(new BaseCardObj(triggerObj.contextObj.sharedCardPool.getByName("WeiXingJiQiRen")))
        }
    }
}

