// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {TriggerObj} from "../../../../Trigger";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_100_Buddy_imageFromHsJson512x.png
 */
export default class BingHaoQiangLiMengLangV29_4_2_199503 extends BaseCard {
    name = "冰嚎，强力猛狼"
    ethnicity = ["野兽"]
    attack = 5
    life = 2
    graded = 4
    cardType = "minion"
    isSell = false

    descriptionStr() {
        return "在一个友方随从消灭敌人后，永久获得+1生命值。"
    }
    // todo 其他杀死
}
