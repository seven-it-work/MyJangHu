// 将seven替换为路径
import BaseCard from "../../../../baseCard";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_801_Gt_imageFromHsJson512x.png
 */
export default class YinYuChuE extends BaseCard {
    name = "银羽雏鹅"
    ethnicity = ["野兽"]
    attack = 2
    life = 2
    graded = 1
    cardType = "minion"
    isSell = false
    isMockery = true

    descriptionStr() {
        return "<b>嘲讽</b>"
    }
}
