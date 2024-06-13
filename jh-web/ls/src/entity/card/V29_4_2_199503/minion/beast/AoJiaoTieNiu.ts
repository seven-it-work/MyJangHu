// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop.ts";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_878_battlegroundsImage.png
 */
export default class AoJiaoTieNiuV29_4_2_199503 extends BaseCard {
    name = "傲角铁牛"
    ethnicity = ["野兽", "机械"]
    attack = 10
    life = 16
    graded = 6
    cardType = "minion"

    descriptionStr() {
        if (this.isGold) {
            return "每当本随从受到伤害，获得<b>圣盾</b>。"
        }
        return "每当本随从受到伤害，获得<b>圣盾</b>。"
    }

    whenInjured(flipFlop: FlipFlop) {
        this.showLog(flipFlop)
        this.isHolyShield = true
    }
}
