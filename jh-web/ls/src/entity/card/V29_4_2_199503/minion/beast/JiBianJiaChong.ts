// 将seven替换为路径
import BaseCard from "../../../../baseCard";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_084_battlegroundsImage.png
 */
export default class JiBianJiaChongV29_4_2_199503 extends BaseCard {
    name = "机变甲虫"
    ethnicity = ["野兽"]
    attack = 2
    life = 1
    graded = 3
    cardType = "minion"

    descriptionStr() {
        if (this.isGold) {
            return "<b>抉择：</b>使一只野兽获得+2/+2和<b>复生</b>；或者+6/+6和<b>嘲讽</b>。"
        }
        return "<b>抉择：</b>使一只野兽获得+1/+1和<b>复生</b>；或者+3/+3和<b>嘲讽</b>。"
    }

    // todo 抉择怎么搞呢？
}
