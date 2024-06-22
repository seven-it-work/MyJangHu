// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_041_battlegroundsImage.png
 */
export default class AoShuShouHuZheKaLeiGouSiV29_4_2_199503 extends BaseCard {
    name = "奥术守护者卡雷苟斯"
    ethnicity = ["龙"]
    attack = 4
    life = 12
    graded = 6
    cardType = "minion"
    isOtherTriggering = true

    warRoarHook(flipFlop: FlipFlop) {
        this.showLog(flipFlop)
        flipFlop.currentPlayer.getCardList().filter(card=>card.baseCard.ethnicity.includes('龙')).forEach(card => {
            card.addBonus(flipFlop, this.isGold ? 2 : 1, true, !flipFlop.currentPlayer.isEndRound)
            card.addBonus(flipFlop, this.isGold ? 2 : 1, false, !flipFlop.currentPlayer.isEndRound)
        })
    }

    descriptionStr() {
        if (this.isGold) {
            return "在你触发一个<b>战吼</b>后，使你的龙获得+2/+2。"
        }
        return "在你触发一个<b>战吼</b>后，使你的龙获得+1/+1。"
    }
}
