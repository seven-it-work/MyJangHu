// 将seven替换为路径
import BaseCard from "../../../../baseCard";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_101_Buddy_imageFromHsJson512x.png
 */
export default class YouNianLeiXiangV29_4_2_199503 extends BaseCard {
    name = "幼年雷象"
    ethnicity = ["野兽"]
    attack = 2
    life = 2
    graded = 3
    cardType = "minion"
    isSell = false

    descriptionStr() {
        return "在你使用一张攻击力等同于生命值的随从牌后，获得+2/+2。"
    }

    // todo
}
