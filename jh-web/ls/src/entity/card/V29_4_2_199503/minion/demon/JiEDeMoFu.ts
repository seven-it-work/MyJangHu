// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";
import randomUtil from "../../../../../utils/RandomUtils";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

;

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_005_battlegroundsImage.png
 */
export default class JiEDeMoFuV29_4_2_199503 extends BaseCard {
    name = "饥饿的魔蝠"
    ethnicity = ["恶魔"]
    attack = 8
    life = 5
    graded = 6
    cardType = "minion"
    endOfRound = true

    whenTheRoundIsOver(flipFlop: FlipFlop) {
        const cardList = flipFlop.currentPlayer.getCardList().filter(card => card.baseCard.ethnicity.includes('恶魔'));
        const number = this.isGold ? 2 : 1;
        randomUtil.shuffle(cardList).forEach(card => {
            const cardList = flipFlop.currentPlayer.tavern.getCardList('随从');
            if (cardList.length <= 0) {
                return
            }
            const baseCardObj = randomUtil.pickone(cardList);
            flipFlop.currentPlayer.tavern.removeCard(baseCardObj, flipFlop.contextObj.sharedCardPool)
            card.baseCard.addBonus(BonusCreatUtil(flipFlop.currentCard, baseCardObj.life * number), false, true)
            card.baseCard.addBonus(BonusCreatUtil(flipFlop.currentCard, baseCardObj.attack * number), true, true)
        })
    }

    descriptionStr() {
        if (this.isGold) {
            return "在你的回合结束时，你的恶魔各吞食酒馆中的一个随从，获得其双倍属性值。"
        }
        return "在你的回合结束时，你的恶魔各吞食酒馆中的一个随从，获得其属性值。"
    }
}
