// 将seven替换为路径
import BaseCard from "../../../../baseCard";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_HERO_201pt6_battlegroundsImage.png
 */
export default class EZuMaTeDeChuXu extends BaseCard {
    name = "厄祖玛特的触须"
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
