// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_159_battlegroundsImage.png
 */
export default class AnBiaoJueShiYueShouV29_4_2_199503 extends BaseCard {
    name = "暗膘爵士乐手"
    ethnicity = ["野猪人"]
    attack = 2
    life = 5
    graded = 3
    cardType = "minion"
    isWarRoars = true

    warRoar(flipFlop: FlipFlop) {
        flipFlop.currentPlayer.bloodGemsAdd(false,this.isGold?2:1);
    }

    descriptionStr() {
        if (this.isGold) {
            return "<b>战吼：</b>在本局对战中，你的<b>鲜血宝石</b>会额外获得+2生命值。"
        }
        return "<b>战吼：</b>在本局对战中，你的<b>鲜血宝石</b>会额外获得+1生命值。"
    }
}
