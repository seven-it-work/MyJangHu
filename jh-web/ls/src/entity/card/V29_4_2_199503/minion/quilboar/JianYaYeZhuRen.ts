// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import BaseCardObj from "../../../../../objs/BaseCardObj";
import randomUtil from "../../../../../utils/RandomUtils";
import {BonusPropertyCreatUtil} from "../../../../../objs/Bonus";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_102_battlegroundsImage.png
 */
export default class JianYaYeZhuRenV29_4_2_199503 extends BaseCard {
    name = "坚牙野猪人"
    ethnicity = ["野猪人"]
    attack = 5
    life = 3
    graded = 2
    cardType = "minion"

    whenSpellUse(flipFlop: FlipFlop) {
        if (flipFlop.targetCard.baseCard.classType === 'XianXueBaoShi') {
            this.isHolyShield = true
            this.showLog(flipFlop)
            console.log(this)
            if (!this.isGold) {
                this.bonusProperty.push(BonusPropertyCreatUtil(flipFlop.currentCard,
                    {
                        endRoundImpactMethod: (card: BaseCardObj) => {
                            card.baseCard.isHolyShield = false
                        }
                    },
                    undefined))
            }
        }
    }


    descriptionStr() {
        if (this.isGold) {
            return "在<b>鲜血宝石</b>被用于本随从后，获得<b>圣盾</b>。"
        }
        return "在<b>鲜血宝石</b>被用于本随从后，直到下个回合，获得<b>圣盾</b>。"
    }
}
