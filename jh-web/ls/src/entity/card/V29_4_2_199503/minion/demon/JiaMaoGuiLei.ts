// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";
import randomUtil from "../../../../../utils/RandomUtils";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

;

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_140_battlegroundsImage.png
 */
export default class JiaMaoGuiLeiV29_4_2_199503 extends BaseCard {
    name = "假冒鬼儡"
    ethnicity = ["恶魔"]
    attack = 1
    life = 1
    graded = 3
    cardType = "minion"
    endOfRound = true

    whenTheRoundIsOver(flipFlop: FlipFlop) {
        const cardList = flipFlop.currentPlayer.tavern.getCardList('随从');
        if (cardList.length <= 0) {
            return
        }
        const baseCardObj = randomUtil.pickone(cardList);
        flipFlop.currentPlayer.tavern.removeCard(baseCardObj, flipFlop.contextObj.sharedCardPool)
        const number = this.isGold ? 2 : 1;
        flipFlop.currentCard.addBonus(new FlipFlop({...flipFlop,targetCard:flipFlop.currentCard}), baseCardObj.life * number, false, true)
        flipFlop.currentCard.addBonus(new FlipFlop({...flipFlop,targetCard:flipFlop.currentCard}), baseCardObj.attack * number, true, true)
    }


    descriptionStr() {
        if (this.isGold) {
            return "在你的回合 结束时，吞食酒馆中的一个随从以获得其双倍属性值。"
        }
        return "在你的回合结束时，吞食酒馆中的一个随从以获得其属性值。"
    }
}
