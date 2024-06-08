// 将seven替换为路径
import BaseCard from "../../../../baseCard";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_603t_battlegroundsImage.png
 */
export default class JiaChong extends BaseCard {
    name = "甲虫"
    ethnicity = ["野兽"]
    attack = 3
    life = 3
    graded = 1
    cardType = "minion"
    isSell = false
    isMockery = true

    descriptionStr() {
        return "<b>嘲讽</b>"
    }

}
