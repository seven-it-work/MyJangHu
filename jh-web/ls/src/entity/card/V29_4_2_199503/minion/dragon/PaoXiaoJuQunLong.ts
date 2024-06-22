// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_816_battlegroundsImage.png
 */
export default class PaoXiaoJuQunLongV29_4_2_199503 extends BaseCard {
    name = "咆哮聚群龙"
    ethnicity = ["龙"]
    attack = 3
    life = 5
    graded = 3
    cardType = "minion"
    isOtherTriggering = true

    whenAttacking(flipFlop: FlipFlop) {
        if (flipFlop.isCurrentCardIsTargetCard()) {
            return
        }
        this.showLog(flipFlop)
        flipFlop.targetCard.addBonus(flipFlop, this.isGold ? 4 : 2, true)
        flipFlop.targetCard.addBonus(flipFlop, this.isGold ? 2 : 1, true)
    }


    descriptionStr() {
        if (this.isGold) {
            return "每当一条友方的龙攻击时，使其获得+4/+2。"
        }
        return "每当一条友方的龙攻击时，使其获得+2/+1。"
    }
}
