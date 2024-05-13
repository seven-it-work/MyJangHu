import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";

export default class DiDiaoTiQinYuRen extends BaseCard {
    name = "低调提琴鱼人"
    ethnicity = ["鱼人"]
    attack = 8
    life = 3
    graded = 5
    description = "亡语：召唤你手牌中生命值最高的随从，其登场仅限本场战斗。"

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const baseCardObjs = currentPlayer.handCardList.sort((item1, item2) => item1.life - item2.life);
        if (baseCardObjs.length <= 0) {
            return;
        }
        currentPlayer.addCard(baseCardObjs[0], currentPlayer.findNextCard(currentCard), triggerObj)
    }
}

