// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import randomUtil from "../../../../../utils/RandomUtils";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_582_battlegroundsImage.png
 */
export default class ZhongShangDeQiangDaoV29_4_2_199503 extends BaseCard {
    name = "重伤的强盗"
    ethnicity = ["野猪人"]
    attack = 3
    life = 3
    graded = 3
    cardType = "minion"

    beginRound = true

    whenTheRoundBegin(flipFlop: FlipFlop) {
        const baseCardObjs = flipFlop.currentPlayer.handCardList.filter(card => card.isSpell());
        if (baseCardObjs.length <= 0) {
            return
        }
        this.showLog(flipFlop)
        const baseCardObj = randomUtil.pickone(baseCardObjs);
        flipFlop.currentPlayer.removeCardInHand(baseCardObj)
        const number = this.isGold ? 6 : 3;
        const xianXueBaoShi = flipFlop.contextObj.sharedCardPool.getByName("XianXueBaoShi");
        xianXueBaoShi.life = flipFlop.currentPlayer.bloodGems.life
        xianXueBaoShi.attack = flipFlop.currentPlayer.bloodGems.attack
        for (let i = 0; i < number; i++) {
            const baseCardObj = new BaseCardObj(xianXueBaoShi);
            flipFlop.currentPlayer.addCardInHand(baseCardObj, flipFlop.contextObj.sharedCardPool)
        }
    }


    descriptionStr() {
        if (this.isGold) {
            return "在你的回合开始时，弃掉一张法术牌以获取6张<b>鲜血宝石</b>。"
        }
        return "在你的回合开始时，弃掉一张法术牌以获取3张<b>鲜血宝石</b>。"
    }
}
