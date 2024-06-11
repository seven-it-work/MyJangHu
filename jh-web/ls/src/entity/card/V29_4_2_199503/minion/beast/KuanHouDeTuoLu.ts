// 将seven替换为路径
import BaseCard from "../../../../baseCard";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_105_battlegroundsImage.png
 */
export default class KuanHouDeTuoLuV29_4_2_199503 extends BaseCard {
    name = "宽厚的驼鹿"
    ethnicity = ["野兽"]
    attack = 5
    life = 2
    graded = 4
    cardType = "minion"
    isSell = false

    descriptionStr() {
        if (this.isGold) {
            return "<b>亡语：</b>召唤你的队友战队中2个随从<i>（宽厚的驼鹿除外）</i>的复制，将其生命值变为1。"
        }
        return "<b>亡语：</b>召唤你的队友战队中一个随从<i>（宽厚的驼鹿除外）</i>的复制，将其生命值变为1。"
    }

    // 暂时不支持双人默认
}
