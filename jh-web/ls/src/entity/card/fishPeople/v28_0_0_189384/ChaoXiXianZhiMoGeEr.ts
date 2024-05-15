import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class ChaoXiXianZhiMoGeEr extends BaseCard {
    name = "潮汐先知摩戈尔"
    ethnicity = ["鱼人"]
    attack = 1
    life = 10
    graded = 7
    description = "剧毒。每当本随从消灭一个随从时，使你手牌中的张随从牌获得被消灭随从的最大属性值。"
    hasPoison = true;

    // 消灭随从的最大属性值。这个是什么意思？
    whenKillOneTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const targetCard = triggerObj.targetCard;
        if (!targetCard) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        console.log(`(${currentPlayer.name})的【${this.name}】触发每当本随从消灭一个随从时，使你手牌中的张随从牌获得被消灭随从的最大属性值`)
        const baseCardObjs = currentPlayer.handCardList.filter(item => item.baseCard.type === '随从');
        if (baseCardObjs.length <= 0) {
            return;
        }
        const baseCardObj = randomUtil.pickone(baseCardObjs);
        baseCardObj.baseCard.attackBonus.push({
            markupValue: targetCard.attack,
            baseCardId: currentCard.id,
            baseCardName: this.name,
        })
        baseCardObj.baseCard.lifeBonus.push({
            markupValue: targetCard.baseCard.getPrimitiveLife(),
            baseCardId: currentCard.id,
            baseCardName: this.name,
        })
    }
}

