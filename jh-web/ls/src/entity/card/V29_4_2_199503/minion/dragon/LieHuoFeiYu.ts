// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_040_battlegroundsImage.png
 */
export default class LieHuoFeiYuV29_4_2_199503 extends BaseCard {
    name = "烈火飞鱼"
    ethnicity = ["龙", "鱼人"]
    attack = 2
    life = 4
    graded = 2
    cardType = "minion"
    isOtherTriggering = true

    warRoarHook(flipFlop: FlipFlop) {
        this.showLog(flipFlop)
        const value = this.isGold ? 2 : 1;
        flipFlop.currentCard.addBonus(flipFlop, value, true, !flipFlop.currentPlayer.isEndRound)
        flipFlop.currentCard.addBonus(flipFlop, value, false, !flipFlop.currentPlayer.isEndRound)
    }


    descriptionStr() {
        if (this.isGold) {
            return "在你触发一个<b>战吼</b>后，获得+2/+2。"
        }
        return "在你触发一个<b>战吼</b>后，获得+1/+1。"
    }
}
