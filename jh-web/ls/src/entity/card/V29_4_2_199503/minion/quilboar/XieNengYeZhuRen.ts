// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import randomUtil from "../../../../../utils/RandomUtils";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_633_battlegroundsImage.png
 */
export default class XieNengYeZhuRenV29_4_2_199503 extends BaseCard {
    name = "邪能野猪人"
    ethnicity = ["野猪人", "恶魔"]
    attack = 2
    life = 6
    graded = 5
    cardType = "minion"
    counter = 0;
    counterResetValue = 2;

    whenSpellUse(flipFlop: FlipFlop) {
        this.counter++;
        this.showLog(flipFlop)
        if (this.counter >= this.counterResetValue) {
            this.counter = 0;
            const cardList = flipFlop.currentPlayer.tavern.getCardList('随从');
            if (cardList.length <= 0) {
                return
            }
            const baseCardObj = randomUtil.pickone(cardList);
            flipFlop.currentPlayer.tavern.removeCard(baseCardObj, flipFlop.contextObj.sharedCardPool)
            const number = this.isGold ? 2 : 1;
            flipFlop.currentCard.addBonus(new FlipFlop({
                ...flipFlop,
                targetCard: flipFlop.currentCard
            }), baseCardObj.life * number, false, true)
            flipFlop.currentCard.addBonus(new FlipFlop({
                ...flipFlop,
                targetCard: flipFlop.currentCard
            }), baseCardObj.attack * number, true, true)
        }
    }

    descriptionStr() {
        if (this.isGold) {
            return `在你施放2个法术后，吞食酒馆中的一个随从，获得其双倍属性值。<i>（还剩${this.counter}个！）</i>`
        }
        return `在你施放2个法术后，吞食酒馆中的一个随从，获得其属性值。<i>（还剩${this.counter}个！）</i>`
    }
}
