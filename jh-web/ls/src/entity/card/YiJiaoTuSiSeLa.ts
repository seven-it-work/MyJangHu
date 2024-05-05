import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";

export default class YiJiaoTuSiSeLa extends BaseCard {
    name = "异教徒斯瑟拉"
    accompanyingRace = ["恶魔"]
    attack = 8
    life = 5
    graded = 6
    description = "潜行。亡语：召唤你在本场战斗中死亡的第一个恶魔，保留其额外效果。"
    isSneak = true;
    // todo 死亡池、亡语完善
}
