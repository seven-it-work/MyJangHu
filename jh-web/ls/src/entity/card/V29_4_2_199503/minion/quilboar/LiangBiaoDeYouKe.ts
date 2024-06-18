// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_301_battlegroundsImage.png
 */
export default class LiangBiaoDeYouKeV29_4_2_199503 extends BaseCard {
    name = "晾膘的游客"
    ethnicity = ["野猪人"]
    attack = 1
    life = 2
    graded = 1
    cardType = "minion"

    whenBeingSold(flipFlop: FlipFlop) {
        this.showLog(flipFlop)
        const number = this.isGold ? 4 : 2;
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
            return "当你出售本随从时，获取4张<b>鲜血宝石</b>。"
        }
        return "当你出售本随从时，获取2张<b>鲜血宝石</b>。"
    }
}
