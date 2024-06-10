// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop.ts";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_018_battlegroundsImage.png
 */
export default class JuLangGeDeLinV29_4_2_199503 extends BaseCard {
    name = "巨狼戈德林"
    ethnicity = ["野兽"]
    attack = 4
    life = 4
    graded = 6
    cardType = "minion"


    descriptionStr() {
        if (this.isGold) {
            return "<b>亡语：</b>在本场战斗的剩余时间内，你的野兽拥有+8/+8。"
        }
        return "<b>亡语：</b>在本场战斗的剩余时间内，你的野兽拥有+4/+4。"
    }

    isDeadLanguage = true

    deadLanguage(flipFlop: FlipFlop) {
        // todo 加成（这种加成回合结束就归零）
    }
}
