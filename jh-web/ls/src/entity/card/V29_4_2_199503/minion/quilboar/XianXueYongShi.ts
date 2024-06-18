// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_017_battlegroundsImage.png
 */
export default class XianXueYongShiV29_4_2_199503 extends BaseCard {
    name = "鲜血勇士"
    ethnicity = ["野猪人"]
    attack = 18
    life = 3
    graded = 7
    cardType = "minion"
    isWarRoars = true
    isDeadLanguage = true

    warRoar(flipFlop: FlipFlop) {
        flipFlop.currentPlayer.bloodGemsAdd(false, this.isGold ? 2 : 1);
        flipFlop.currentPlayer.bloodGemsAdd(true, this.isGold ? 2 : 1);
    }

    deadLanguage(flipFlop: FlipFlop) {
        flipFlop.currentPlayer.bloodGemsAdd(false, this.isGold ? 2 : 1);
        flipFlop.currentPlayer.bloodGemsAdd(true, this.isGold ? 2 : 1);
    }


    descriptionStr() {
        if (this.isGold) {
            return "<b>战吼，亡语：</b>在本局对战中，你的<b>鲜血宝石</b>使随从额外获得+2/+2。"
        }
        return "<b>战吼，亡语：</b>在本局对战中，你的<b>鲜血宝石</b>使随从额外获得+1/+1。"
    }
}
