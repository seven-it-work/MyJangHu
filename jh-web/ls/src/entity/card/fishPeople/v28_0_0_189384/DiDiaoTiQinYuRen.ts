import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import {cloneDeep} from "lodash";

export default class DiDiaoTiQinYuRenV28 extends BaseCard {
    name = "低调提琴鱼人"
    ethnicity = ["鱼人"]
    attack = 8
    life = 3
    graded = 5
    descriptionStr(){return "亡语：召唤你手牌中生命值最高的随从，其登场仅限本场战斗。"}
    isDeadLanguage = true

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        console.log(`(${currentPlayer.name})的【${this.name}】触发：亡语：召唤你手牌中生命值最高的随从，其登场仅限本场战斗。`)
        const baseCardObjs = currentPlayer.handCardList.sort((item1, item2) => item1.life - item2.life);
        if (baseCardObjs.length <= 0) {
            return;
        }
        currentPlayer.addCard(cloneDeep(baseCardObjs[0]), currentPlayer.findNextCard(currentCard), triggerObj)
    }
}
