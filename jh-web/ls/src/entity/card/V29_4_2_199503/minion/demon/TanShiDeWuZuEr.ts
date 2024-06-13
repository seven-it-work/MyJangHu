// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";
import randomUtil from "../../../../../utils/RandomUtils";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

;

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_004_battlegroundsImage.png
 */
export default class TanShiDeWuZuErV29_4_2_199503 extends BaseCard {
    name = "贪食的乌祖尔"
    ethnicity = ["恶魔"]
    attack = 4
    life = 6
    graded = 5
    cardType = "minion"


    descriptionStr() {
        if (this.isGold) {
            return "<b><b>嘲讽</b>。</b>在你使用一张恶魔牌后，吞食酒馆中的一个随从，获得其双倍属性值。"
        }
        return "<b><b>嘲讽</b>。</b>在你使用一张恶魔牌后，吞食酒馆中的一个随从，获得其属性值。"
    }

    isOtherTriggering = true

    whenUsed(flipFlop: FlipFlop) {
        if (!flipFlop.isCurrentCardIsTargetCard()) {
            return
        }
        if (flipFlop.currentLocation !== '战场') {
            return;
        }
        if (!flipFlop.targetCard.baseCard.ethnicity.includes('恶魔')) {
            return;
        }
        const cardList = flipFlop.currentPlayer.tavern.getCardList('随从');
        if (cardList.length <= 0) {
            return
        }
        const baseCardObj = randomUtil.pickone(cardList);
        flipFlop.currentPlayer.tavern.removeCard(baseCardObj, flipFlop.contextObj.sharedCardPool)
        const number = this.isGold ? 2 : 1;
        this.addBonus(BonusCreatUtil(flipFlop.currentCard, baseCardObj.life * number), false, true)
        this.addBonus(BonusCreatUtil(flipFlop.currentCard, baseCardObj.attack * number), true, true)
    }
}
