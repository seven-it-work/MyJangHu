// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_531_battlegroundsImage.png
 */
export default class BaoLieBangGeGuShouV29_4_2_199503 extends BaseCard {
    name = "爆裂邦戈鼓手"
    ethnicity = ["野猪人"]
    attack = 4
    life = 3
    graded = 5
    cardType = "minion"
    endOfRound = true;

    whenTheRoundIsOver(flipFlop: FlipFlop) {
        const xianXueBaoShi = flipFlop.contextObj.sharedCardPool.getByName("XianXueBaoShi");
        xianXueBaoShi.life = flipFlop.currentPlayer.bloodGems.life
        xianXueBaoShi.attack = flipFlop.currentPlayer.bloodGems.attack
        const number = this.isGold ? 4 : 2;
        for (let i = 0; i < number; i++) {
            const baseCardObj = new BaseCardObj(xianXueBaoShi);
            flipFlop.currentPlayer.addCardInHand(baseCardObj, flipFlop.contextObj.sharedCardPool)
            // 对自己使用
            baseCardObj.whenUsed(new FlipFlop({
                ...flipFlop,
                currentCard: baseCardObj,
                needSelectCard:flipFlop.currentCard
            }))
        }
    }

    descriptionStr() {
        if (this.isGold) {
            return "在你的回合结束时，获取4张<b>鲜血宝石</b>，并额外对本随从使用4张。"
        }
        return "在你的回合结束时，获取2张<b>鲜血宝石</b>，并额外对本随从使用2张。"
    }
}
