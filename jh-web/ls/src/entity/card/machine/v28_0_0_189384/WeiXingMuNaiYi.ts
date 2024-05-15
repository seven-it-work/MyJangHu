import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class WeiXingMuNaiYiV28 extends BaseCard {
    name = "微型木乃伊"
    ethnicity = ["机械", "亡灵"]
    attack = 1
    life = 2
    graded = 1
    description = "<div><b>复生</b></div>在你的回合结束时，随机使另一个友方随从获得+1攻击力"
    isRebirth: boolean = true;

    whenEndRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        if (!currentPlayer) {
            return
        }
        const baseCardObjs = currentPlayer.cardList.filter(card => card.id !== currentCard.id);
        if (baseCardObjs.length <= 0) {
            return;
        }
        randomUtil.pickone(baseCardObjs).baseCard.attack++
    }
}

