// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop.ts";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_805_battlegroundsImage.png
 */
export default class HengMingFengNiaoV29_4_2_199503 extends BaseCard {
    name = "哼鸣蜂鸟"
    ethnicity = ["野兽"]
    attack = 2
    life = 4
    graded = 2
    cardType = "minion"
    // todo 重新规划

    descriptionStr() {
        if (this.isGold) {
            return "你的其他野兽拥有+4攻击力。"
        }
        return "你的其他野兽拥有+2攻击力。"
    }

    isOtherTriggering = true

    whenSummoned(flipFlop: FlipFlop) {
        const magnification = this.isGold ? 2 : 1;
        if (!flipFlop.isCurrentCardIsTargetCard()) {
            this.showLog(flipFlop)
            flipFlop.targetCard.baseCard.addBonus(flipFlop.currentCard, magnification * 2, true)
        } else {
            // 当前随从召唤，使其他随从+攻击力
            const cardList = flipFlop.currentPlayer.getCardList()
                .filter(card => card.id !== flipFlop.currentCard.id)
                .filter(card => card.baseCard.ethnicity.includes('野兽'));
            cardList.forEach(card => {
                card.baseCard.addBonus(flipFlop.currentCard, magnification * 2, true)
            })

        }
    }

    whenDeath(flipFlop: FlipFlop) {
        this.extracted(flipFlop);
    }

    whenBeingSold(flipFlop: FlipFlop) {
        this.extracted(flipFlop);
    }

    private extracted(flipFlop: FlipFlop) {
        const cardList = flipFlop.currentPlayer.getCardList().filter(card => card.baseCard.ethnicity.includes('野兽'));
        cardList.forEach(card => {
            card.baseCard.removeBonus(flipFlop.currentCard, true)
        })
    }
}
