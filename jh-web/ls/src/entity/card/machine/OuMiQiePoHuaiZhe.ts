import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import BaseCardObj from "../../../objs/BaseCardObj";

export default class OuMiQiePoHuaiZhe extends BaseCard {
    name = "欧米茄破坏者"
    ethnicity = ["机械"]
    attack = 6
    life = 6
    graded = 6
    description = "<b>亡语</b>：召唤六个1/1的微型机器人。每有一个放不下的机器人，便使你的机械获取+1/+1。"

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        for (let i = 0; i < 6; i++) {
            if (currentPlayer.cardListInFighting.length < 7) {
                currentPlayer.cardListInFighting.push(new BaseCardObj(triggerObj.contextObj.sharedCardPool.getByName("WeiXingJiQiRen")))
            } else {
                currentPlayer.cardListInFighting.filter(card => card.baseCard.ethnicity.includes("机械")).forEach(card => {
                    card.baseCard.life++;
                    card.baseCard.attack++;
                })
            }
        }
    }
}

