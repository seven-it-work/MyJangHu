import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";

export default class KongJuHuZiWang extends BaseCard {
    name = "恐惧胡子王"
    ethnicity = ["恶魔", "海盗"]
    attack = 4
    life = 4
    graded = 3
    description = "在你的回合结束时，对你的影响造成1点伤害并获取一张铸币牌。"

    whenEndRound(context: ContextObj) {
        context.player.changeLife(-1, context)
        // todo 铸币魔法牌
        // context.player.handCardMap.set()
    }
}
