// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import BaseCardObj from "../../../../../objs/BaseCardObj";
import {utils} from "../../../../../utils/RandomUtils";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_888_battlegroundsImage.png
 */
export default class GeJuYiShuJiaV29_4_2_199503 extends BaseCard {
    name = "歌剧异术家"
    ethnicity = ["鱼人"]
    attack = 5
    life = 2
    graded = 5
    cardType = "minion"

    descriptionStr() {
        if (this.isGold) {
            return "<b>烈毒</b>。<b>亡语：</b>使2个友方鱼人获得<b>烈毒</b>。"
        }
        return "<b>烈毒</b>。<b>亡语：</b>使一个友方鱼人获得<b>烈毒</b>。"
    }

    isDeadLanguage = true
    isHighlyToxic = true


    deadLanguage(flipFlop: FlipFlop) {
        const baseCardObjs = flipFlop.currentPlayer.getCardList().filter(card => card.baseCard.ethnicity.includes('鱼人'));
        const pick = utils.pick(baseCardObjs, 2);
        const number = this.isGold ? 2 : 1;
        for (let i = 0; i < number; i++) {
            const pickElement: BaseCardObj = pick[i];
            if (pickElement) {
                pickElement.changeIsHighlyToxic(true,flipFlop.currentPlayer)
            } else {
                return
            }
        }
    }
}
