// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";
import RanYi from "./RanYi";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_309_battlegroundsImage.png
 */
export default class DaJiSaSiJiangJunV29_4_2_199503 extends BaseCard {
    name = "达基萨斯将军"
    ethnicity = ["龙"]
    attack = 2
    life = 8
    graded = 5
    cardType = "minion"
    isWarRoars = true

    warRoar(flipFlop: FlipFlop) {
        const gold = this.isGold ? 2 : 1;
        for (let i = 0; i < gold; i++) {
            const ranYi = flipFlop.contextObj.sharedCardPool.getByName("RanYi");
            flipFlop.currentPlayer.addCardInHand(new BaseCardObj(ranYi), flipFlop.contextObj.sharedCardPool)
        }
    }

    descriptionStr() {
        if (this.isGold) {
            return "<b>战吼：</b>获取两张2/1并具有“<b>战吼：</b>使一条龙获得+5攻击力”的燃翼。"
        }
        return "<b>战吼：</b>获取一张2/1并具有“<b>战吼：</b>使一条龙获得+5攻击力”的燃翼。"
    }
}
