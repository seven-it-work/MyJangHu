import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";
import {cloneDeep} from "lodash";

export default class XiongEDeMiShiZheV28 extends BaseCard {
    name = "凶恶的觅食者"
    ethnicity = ["鱼人"]
    attack = 4
    life = 3
    graded = 3

    descriptionStr() {
        let txt = '+2/+2'
        if (this.isGold) {
            txt = '+4/+4'
        }
        return `战斗开始时：使你手牌中的一张鱼人牌获得${txt}并召唤它，其登场仅限本场战斗。`
    }

    whenStartFightingTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const baseCardObjs = currentPlayer.handCardList
            .filter(item => item.baseCard.type === '随从')
            .filter(item => item.baseCard.ethnicity.includes('鱼人'));
        if (baseCardObjs.length <= 0) {
            return;
        }
        const baseCardObj = randomUtil.pickone(baseCardObjs);
        console.log(`(${currentPlayer.name})的【${this.name}】的战斗开始时触发：${this.descriptionStr()}`)
        let magnification = this.isGold ? 2 : 1;
        baseCardObj.baseCard.attackBonus.push({
            markupValue: 2 * magnification,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
        baseCardObj.baseCard.lifeBonus.push({
            markupValue: 2 * magnification,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })

        currentPlayer.addCard(cloneDeep(baseCardObj), currentPlayer.findNextCard(currentCard), triggerObj);
    }
}
