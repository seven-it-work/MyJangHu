// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_800_battlegroundsImage.png
 */
export default class YouLingZhongQuanV29_4_2_199503 extends BaseCard {
    name = "幼龄忠犬"
    ethnicity = ["野兽"]
    attack = 1
    life = 3
    graded = 1
    cardType = "minion"


    descriptionStr() {
        if (this.isGold) {
            return "每当本随从受到伤害，永久获得 +2攻击力。"
        }
        return "每当本随从受到伤害，永久获得 +1攻击力。"
    }

    whenInjured(flipFlop: FlipFlop) {
        this.showLog(flipFlop)
        this.addBonus(flipFlop.currentCard, this.isGold ? 2 : 1, true, flipFlop.currentPlayer)
    }
}
