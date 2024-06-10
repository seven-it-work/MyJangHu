// 将seven替换为路径
import BaseCard from "../../../../baseCard";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_HERO_201_Buddy_imageFromHsJson512x.png
 */
export default class TaMuZuoV29_4_2_199503 extends BaseCard {
    name = "塔穆佐"
    ethnicity = ["野兽"]
    attack = 4
    life = 4
    graded = 2
    cardType = "minion"
    isSell = false

    descriptionStr() {
        return "<b>复仇（2）：</b>使“触须”技能获得+1/+1。"
    }

}
