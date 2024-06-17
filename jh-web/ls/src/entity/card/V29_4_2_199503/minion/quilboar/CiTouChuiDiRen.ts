// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_160_battlegroundsImage.png
 */
export default class CiTouChuiDiRenV29_4_2_199503 extends BaseCard {
    name = "刺头吹笛人"
    ethnicity = ["野猪人"]
    attack = 5
    life = 1
    graded = 3
    cardType = "minion"
    isDeadLanguage = true

    deadLanguage(flipFlop: FlipFlop) {
        flipFlop.currentPlayer.bloodGemsAdd(true, this.isGold ? 2 : 1)
    }


    descriptionStr() {
        if (this.isGold) {
            return "<b>亡语：</b>在本局对战中，你的<b>鲜血宝石</b>会额外获得+2攻击力。"
        }
        return "<b>亡语：</b>在本局对战中，你的<b>鲜血宝石</b>会额外获得+1攻击力。"
    }
}
