import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj.ts";
import randomUtil from "../../utils/RandomUtils.ts";

export default class LingHunHuiSuZhe extends BaseCard {
    name = "灵魂回溯者"
    ethnicity = ["恶魔"]
    attack = 3
    life = 1
    graded = 2
    description = "在你的英雄受到伤害后，回溯该伤害并使本随从获取+1生命值"

    // todo 英雄受伤监听
}
