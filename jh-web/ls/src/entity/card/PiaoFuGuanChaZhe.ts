import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";

export default class PiaoFuGuanChaZhe extends BaseCard {
    name = "漂浮观察者"
    ethnicity = ["恶魔"]
    attack = 4
    life = 4
    graded = 4
    description = "每当你的英雄在你的回合受到伤害，便获得+2/+2。"

    // todo 英雄伤害监听
}
