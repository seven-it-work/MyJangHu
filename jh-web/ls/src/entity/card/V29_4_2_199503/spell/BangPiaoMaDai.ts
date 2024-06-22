// 将seven替换为路径
import BaseCard from "../../../baseCard";
import BaseCardObj from "../../../../objs/BaseCardObj";
import {FlipFlop} from "../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_Reward_718t_battlegroundsImage.png
 */
export default class BangPiaoMaDai extends BaseCard {
    name = "绑票麻袋"

    attack = 0
    life = 0
    graded = 1
    cardType = "spell"
    isSell = false
    isNeedSelect = true

    needSelectFilter(baseCardObj: BaseCardObj[]): BaseCardObj[] {
        return super.needSelectFilter(baseCardObj).filter(card => card.location === '战场' || card.location === '酒馆').filter(card => !card.baseCard.isGold);
    }

    descriptionStr() {
        return "选择一张非金色的牌，将其移入你的手牌。"
    }

    whenUsed(flipFlop: FlipFlop) {
        if (!flipFlop.needSelectCard) {
            return
        }
        this.showLog(flipFlop)
        if (flipFlop.needSelectCard.location === '酒馆') {
            // 酒馆移除
            flipFlop.currentPlayer.tavern.removeCard(flipFlop.needSelectCard, flipFlop.contextObj.sharedCardPool)
        } else if (flipFlop.needSelectCard.location === '战场') {
            // 战场移除
            flipFlop.currentPlayer.cardCardListRemove(flipFlop.needSelectCard)
        }
        flipFlop.currentPlayer.addCardInHand(flipFlop.needSelectCard, flipFlop.contextObj.sharedCardPool)
    }
}
