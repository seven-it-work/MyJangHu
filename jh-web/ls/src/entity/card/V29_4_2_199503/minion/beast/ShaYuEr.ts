// 将seven替换为路径
import BaseCard from "../../../../baseCard";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HERO_68_Buddy_imageFromHsJson512x.png
 */
export default class ShaYuErV29_4_2_199503 extends BaseCard {
    name = "鲨鱼饵"
    ethnicity = ["野兽", "海盗"]
    attack = 4
    life = 2
    graded = 5
    cardType = "minion"
    isSell = false

    descriptionStr() {
        return "<b>战吼：</b>复原你的英雄技能。"
    }

}
