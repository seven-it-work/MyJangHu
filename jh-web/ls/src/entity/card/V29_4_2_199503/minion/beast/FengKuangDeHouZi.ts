// 将seven替换为路径
import BaseCard from "../../../../baseCard";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HERO_38_Buddy_imageFromHsJson512x.png
 */
export default class FengKuangDeHouZiV29_4_2_199503 extends BaseCard {
    name = "疯狂的猴子"
    ethnicity = ["野兽"]
    attack = 4
    life = 4
    graded = 2
    cardType = "minion"
    isSell = false
    descriptionStr() {
        return "在你喂给随从香蕉后，使其获得+1/+1。"
    }
    // todo
}
