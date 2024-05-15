import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class XiongEDeMiShiZheV28 extends BaseCard {
    name = "凶恶的觅食者"
    ethnicity = ["鱼人"]
    attack = 4
    life = 3
    graded = 3
    description = "战斗开始时：使你手牌中的一张鱼人牌获得+2/+2并召唤它，其登场仅限本场战斗。"

    whenStartFightingTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const baseCardObjs = currentPlayer.handCardList.filter(item => item.baseCard.type === '随从');
        if (baseCardObjs.length <= 0) {
            return;
        }
        const baseCardObj = randomUtil.pickone(baseCardObjs);
        currentPlayer.addCard(baseCardObj, currentPlayer.findNextCard(currentCard), triggerObj);
    }
}

