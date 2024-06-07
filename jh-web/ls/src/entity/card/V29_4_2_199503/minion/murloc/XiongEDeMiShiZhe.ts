// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import randomUtil from "../../../../../utils/RandomUtils";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_556_battlegroundsImage.png
 */
export default class XiongEDeMiShiZheV29_4_2_199503 extends BaseCard {
    name = "凶饿的觅食者"
    ethnicity = ["鱼人"]
    attack = 3
    life = 4
    graded = 3
    cardType = "minion"

    beginRound = true

    descriptionStr() {
        if (this.isGold) {
            return "<b>战斗开始时：</b>使你手牌中的一张随从牌获得+4/+4并召唤它，其登场仅限本场战斗。"
        }
        return "<b>战斗开始时：</b>使你手牌中的一张随从牌获得+2/+2并召唤它，其登场仅限本场战斗。"
    }

    whenTheRoundBegin(flipFlop: FlipFlop) {
        const baseCardObjs = flipFlop.currentPlayer.handCardList.filter(card => !card.isLock)
        if (baseCardObjs.length <= 0) {
            return
        }
        const baseCardObj: BaseCardObj = randomUtil.pickone(baseCardObjs);
        const number = this.isGold ? 2 : 1;
        baseCardObj.baseCard.attackBonus.push({
            baseCardId: flipFlop.currentCard.id,
            baseCardName: this.name,
            markupValue: 2 * number
        })
        baseCardObj.baseCard.lifeBonus.push({
            baseCardId: flipFlop.currentCard.id,
            baseCardName: this.name,
            markupValue: 2 * number
        })
        flipFlop.currentPlayer.addCard2(baseCardObj, flipFlop.currentCard, flipFlop)
    }
}
