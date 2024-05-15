import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj.ts";
import Coin from "../../spells/base/Coin.ts";

export default class KongJuHuZiWangV28 extends BaseCard {
    name = "恐惧胡子王"
    ethnicity = ["恶魔", "海盗"]
    attack = 4
    life = 4
    graded = 3
    description = "在你的回合结束时，对你的影响造成1点伤害并获取一张铸币牌。"

    whenEndRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.changeLife(-1, triggerObj)
        const baseCardObj = new BaseCardObj(new Coin());
        currentPlayer.addCardInHand(baseCardObj, triggerObj.contextObj.sharedCardPool)
    }
}
