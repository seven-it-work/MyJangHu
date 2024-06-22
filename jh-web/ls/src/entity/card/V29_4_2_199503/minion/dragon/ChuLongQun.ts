// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_305_Buddy_imageFromHsJson512x.png
 */
export default class ChuLongQunV29_4_2_199503 extends BaseCard {
    name = "雏龙群"
    ethnicity = ["龙"]
    attack = 4
    life = 2
    graded = 2
    cardType = "minion"
    isSell = false

    whenSummoned(flipFlop: FlipFlop) {
        if (flipFlop.targetCard.baseCard.classType === 'AoNiKeXiYaChuLong') {
            this.showLog(flipFlop)
            flipFlop.currentCard.addBonus(flipFlop, this.isGold ? 4 : 2, true, true)
            flipFlop.currentCard.addBonus(flipFlop, this.isGold ? 4 : 2, false, true)
        }
    }


    descriptionStr() {
        if (this.isGold) {
            return "每当你召唤一条雏龙，永久获得+4/+4。"
        }
        return "每当你召唤一条雏龙，永久获得+2/+2。"
    }

}
