// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";

;

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HERO_37_Buddy_imageFromHsJson512x.png
 */
export default class JiErLiKeV29_4_2_199503 extends BaseCard {
    name = "基尔里克"
    ethnicity = ["恶魔"]
    attack = 3
    life = 6
    graded = 4
    cardType = "minion"
    isSell = false

    descriptionStr() {
        return "<b>嘲讽</b>。<b>亡语：</b>随机获取一张恶魔牌。"
    }
}
