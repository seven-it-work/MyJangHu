// 将seven替换为路径
import BaseCard from "../../../baseCard.ts";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_870_Gt_battlegroundsImage.png
 */
export default class BoTaoLinLi extends BaseCard {
    name = "波涛鳞立"

    attack = 0
    life = 0
    graded = 1
    cardType = "spell"


    descriptionStr() {
        return "触发一个友方随从的<b>战吼</b>。"
    }

}
