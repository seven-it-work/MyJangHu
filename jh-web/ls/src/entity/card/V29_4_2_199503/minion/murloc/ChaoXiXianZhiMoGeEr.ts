// 将seven替换为路径
import BaseCard from "../../../../baseCard";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_513_battlegroundsImage.png
 */
export default class ChaoXiXianZhiMoGeErV29_4_2_199503 extends BaseCard {
    name = "潮汐先知摩戈尔"
    ethnicity = ["鱼人"]
    attack = 1
    life = 10
    graded = 7
    cardType = "minion"
    isSell = false
    hasPoison = true

    descriptionStr() {
        if (this.isGold) {
            return "<b><b>剧毒</b>。</b>每当本随从攻击并消灭一个随从时，使你手牌中的一张随从牌获得被消灭随从的双倍最大属性值。"
        }
        return "<b><b>剧毒</b>。</b>每当本随从攻击并消灭一个随从时，使你手牌中的一张随从牌获得被消灭随从的最大属性值。"
    }
    // todo 消灭
}
