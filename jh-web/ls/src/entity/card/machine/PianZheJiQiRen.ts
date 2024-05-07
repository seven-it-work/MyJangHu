import BaseCard from "../../baseCard";

export default class PianZheJiQiRen extends BaseCard {
    name = "偏折机器人"
    ethnicity = ["机械"]
    attack = 3
    life = 2
    graded = 3
    description = "<div><b>圣盾</b></div>在战斗阶段中，每当你召唤一个机械，便获得+2攻击力和圣盾。"
    isHolyShield = true;

    // todo 战斗过程中召唤
}

