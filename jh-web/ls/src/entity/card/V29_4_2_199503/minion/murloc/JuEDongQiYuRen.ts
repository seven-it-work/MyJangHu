// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import randomUtil, {utils} from "../../../../../utils/RandomUtils";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_300_battlegroundsImage.png
 */
export default class JuEDongQiYuRenV29_4_2_199503 extends BaseCard {
    name = "巨饿冬鳍鱼人"
    ethnicity = ["鱼人"]
    attack = 2
    life = 5
    graded = 2
    cardType = "minion"


    descriptionStr() {
        if (this.isGold) {
            return "<b>嘲讽</b>。每当本随从受到伤害，使你手牌中的一张随从牌获得+4/+2。"
        }
        return "<b>嘲讽</b>。每当本随从受到伤害，使你手牌中的一张随从牌获得+2/+1。"
    }

    whenInjured(flipFlop: FlipFlop) {
        const handCardList = flipFlop.currentPlayer.handCardList;
        if (handCardList.length <= 0) {
            return
        }
        const baseCardObj: BaseCardObj = randomUtil.pickone(handCardList);
        this.showLog(flipFlop)
        const number = this.isGold ? 2 : 1;
        baseCardObj.baseCard.attackBonus.push({
            baseCardId: flipFlop.currentCard.id,
            baseCardName: flipFlop.currentCard.baseCard.name,
            markupValue: 2 * number
        })
        baseCardObj.baseCard.lifeBonus.push({
            baseCardId: flipFlop.currentCard.id,
            baseCardName: flipFlop.currentCard.baseCard.name,
            markupValue: 1 * number
        })
    }
}
