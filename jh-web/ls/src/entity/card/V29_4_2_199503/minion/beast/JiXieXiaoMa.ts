// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop.ts";
import BaseCardObj from "../../../../../objs/BaseCardObj.ts";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_008t_battlegroundsImage.png
 */
export default class JiXieXiaoMa extends BaseCard {
    name = "机械小马"
    ethnicity = ["野兽", "机械"]
    attack = 2
    life = 2
    graded = 1
    cardType = "minion"
    isSell = false
    isDeadLanguage = true

    descriptionStr() {
        return "<b>亡语：</b>召唤一个1/1的机械马驹。"
    }

    deadLanguage(flipFlop: FlipFlop) {
        const byName = flipFlop.contextObj.sharedCardPool.getByName("JiXieMaJu");
        byName.isGold = this.isGold
        flipFlop.currentPlayer.addCard2(new BaseCardObj(byName), flipFlop.currentCard, flipFlop)
    }
}
