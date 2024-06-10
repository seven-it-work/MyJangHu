// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop.ts";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_803_battlegroundsImage.png
 */
export default class JinKeGuWeiGuiV29_4_2_199503 extends BaseCard {
    name = "金壳固卫龟"
    ethnicity = ["野兽"]
    attack = 2
    life = 4
    graded = 4
    cardType = "minion"
    isWarRoars = true

    descriptionStr() {
        if (this.isGold) {
            return "<b>战吼：</b>使你的其他野兽获得+4/+8。"
        }
        return "<b>战吼：</b>使你的其他野兽获得+2/+4。"
    }

    warRoar(flipFlop: FlipFlop) {
        const number = this.isGold ? 2 : 1;
        flipFlop.currentPlayer.getCardList()
            .filter(card => card.baseCard.ethnicity.includes('野兽'))
            .forEach(card => {
                card.baseCard.addBonus(card, 2 * number, true)
                card.baseCard.addBonus(card, 4 * number, false)
            })
    }
}
