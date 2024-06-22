// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_043_battlegroundsImage.png
 */
export default class MuNuoZiDuoV29_4_2_199503 extends BaseCard {
    name = "姆诺兹多"
    ethnicity = ["龙"]
    attack = 5
    life = 5
    graded = 5
    cardType = "minion"
    isWarRoars = true

    // todo 记录上次对手，记录下次对手

    descriptionStr() {
        return "<b>战吼：</b>获取你上一个对手的战队中一个随从的一张原始版复制。"
    }

}
