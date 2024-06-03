// 将seven替换为路径
import BaseCard from "../../../../baseCard";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_000_Buddy_imageFromHsJson512x.png
 */
export default class DaQianXieV29_4_2_199503 extends BaseCard {
    name = "大钳蟹"
    ethnicity = ["野兽"]
    attack = 2
    life = 3
    graded = 5
    cardType = "minion"
    isSell = false

    descriptionStr() {
        return "在你的英雄技能造成伤害后，使相邻的随从获得等同于所造成伤害的属性值。"
    }
    // todo 英雄技能
}
