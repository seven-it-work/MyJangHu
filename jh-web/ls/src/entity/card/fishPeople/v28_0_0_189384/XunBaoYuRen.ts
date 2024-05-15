import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class XunBaoYuRenV28 extends BaseCard {
    name = "寻宝鱼人"
    ethnicity = ["鱼人"]
    attack = 3
    life = 3
    graded = 3
    description = "亡语：随机使你手牌中的一张随从牌获取+5/+5。"

    whenDeadTrigger(triggerObj: TriggerObj) {
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
        baseCardObj.baseCard.attackBonus.push({
            markupValue: 5,
            baseCardId: currentCard.id,
            baseCardName: currentCard.baseCard.name,
        })
        baseCardObj.baseCard.lifeBonus.push({
            markupValue: 5,
            baseCardId: currentCard.id,
            baseCardName: currentCard.baseCard.name,
        })
    }
}

