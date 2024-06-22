// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_963_battlegroundsImage.png
 */
export default class DianYinHeChengShiV29_4_2_199503 extends BaseCard {
    name = "电音合成师"
    ethnicity = ["龙"]
    attack = 3
    life = 3
    graded = 3
    cardType = "minion"
    isWarRoars = true

    warRoar(flipFlop: FlipFlop) {
        flipFlop.currentPlayer.getCardList().filter(card => card.baseCard.ethnicity.includes('龙')).forEach(card => {
            card.addBonus(flipFlop, this.isGold ? 6 : 3, true, !flipFlop.currentPlayer.isEndRound)
            card.addBonus(flipFlop, this.isGold ? 2 : 1, false, !flipFlop.currentPlayer.isEndRound)
        })
    }


    descriptionStr() {
        if (this.isGold) {
            return "<b>战吼：</b>使你的其他龙获得+6/+2。"
        }
        return "<b>战吼：</b>使你的其他龙获得+3/+1。"
    }
}
