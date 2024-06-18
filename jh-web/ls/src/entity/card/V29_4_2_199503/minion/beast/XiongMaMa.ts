// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_021_battlegroundsImage.png
 */
export default class XiongMaMa extends BaseCard {
    name = "熊妈妈"
    ethnicity = ["野兽"]
    attack = 4
    life = 4
    graded = 5
    cardType = "minion"
    isSell = false

    descriptionStr() {
        if (this.isGold) {
            return "每当你召唤一只野兽，使其获得+8/+8。"
        }
        return "每当你召唤一只野兽，使其获得+4/+4。"
    }

    isOtherTriggering = true

    whenSummoned(flipFlop: FlipFlop) {
        if (!flipFlop.isCurrentCardIsTargetCard()) {
            if (flipFlop.targetCard.baseCard.ethnicity.includes('野兽')) {
                this.showLog(flipFlop)
                var gold = this.isGold ? 2 : 1;
                flipFlop.targetCard.addBonus(new FlipFlop({...flipFlop,targetCard:flipFlop.currentCard}), gold * 4, true, true)
                flipFlop.targetCard.addBonus(new FlipFlop({...flipFlop,targetCard:flipFlop.currentCard}), gold * 4, false, true)
            }
        }
    }
}
