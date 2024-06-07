// 将seven替换为路径
import BaseCard from "../../../../baseCard";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_117_battlegroundsImage.png
 */
export default class TanTuTiaoTiaoYuV29_4_2_199503 extends BaseCard {
    name = "滩涂跳跳鱼"
    ethnicity = ["鱼人"]
    attack = 4
    life = 4
    graded = 3
    cardType = "minion"
    isSell = false

    descriptionStr() {
        if (this.isGold) {
            return "在本随从被<b>传递</b>后，获得+8/+8。"
        }
        return "在本随从被<b>传递</b>后，获得+4/+4。"
    }
}
