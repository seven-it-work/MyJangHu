// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import randomUtil from "../../../../../utils/RandomUtils";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_583_battlegroundsImage.png
 */
export default class DiBuDaShiLuGuGeV29_4_2_199503 extends BaseCard {
    name = "地卜大师鲁古格"
    ethnicity = ["野猪人"]
    attack = 4
    life = 6
    graded = 4
    cardType = "minion"
    isHolyShield = true

    whenSpellUse(flipFlop: FlipFlop) {
        if (flipFlop.targetCard.baseCard.classType === 'XianXueBaoShi') {
            const number = this.isGold ? 2 : 1;
            for (let i = 0; i < number; i++) {
                const baseCardObjs = flipFlop.currentPlayer.getCardList().filter(card => card.baseCard.classType !== this.classType);
                if (baseCardObjs.length <= 0) {
                    return
                }
                const xianXueBaoShi = flipFlop.contextObj.sharedCardPool.getByName("XianXueBaoShi");
                xianXueBaoShi.life = flipFlop.currentPlayer.bloodGems.life
                xianXueBaoShi.attack = flipFlop.currentPlayer.bloodGems.attack
                const xianXueBaoShiCardObj = new BaseCardObj(xianXueBaoShi);
                const baseCardObj = randomUtil.pickone(baseCardObjs);
                xianXueBaoShiCardObj.whenUsed(new FlipFlop({
                    ...flipFlop,
                    currentCard: xianXueBaoShiCardObj,
                    needSelectCard: baseCardObj
                }))
            }
        }
    }


    descriptionStr() {
        if (this.isGold) {
            return "<b>圣盾</b>。每当一张<b>鲜血宝石</b>被用于本随从时，对一个不同的友方随从使用2张<b>鲜血宝石</b>。"
        }
        return "<b>圣盾</b>。每当一张<b>鲜血宝石</b>被用于本随从时，对一个不同的友方随从使用一张<b>鲜血宝石</b>。"
    }
}
