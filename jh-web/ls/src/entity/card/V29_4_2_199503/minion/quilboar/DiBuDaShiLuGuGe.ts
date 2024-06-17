// 将seven替换为路径
import BaseCard from "../../../../baseCard";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_583_battlegroundsImage.png
 */
export default class DiBuDaShiLuGuGeV29_4_2_199503 extends BaseCard {
    name = "地卜大师鲁古格"
    ethnicity = ["野猪人"]
    attack = 4
    life = 6
    graded = 4
    cardType = "minion"


    descriptionStr() {
        if (this.isGold) {
            return "<b>圣盾</b>。每当一张<b>鲜血宝石</b>被用于本随从时，对一个不同的友方随从使用2张<b>鲜血宝石</b>。"
        }
        return "<b>圣盾</b>。每当一张<b>鲜血宝石</b>被用于本随从时，对一个不同的友方随从使用一张<b>鲜血宝石</b>。"
    }
}
