import BaseCard from "../../../baseCard";

export default class ChaoChaoJiQiRenV28 extends BaseCard {
    name = "吵吵机器人"
    ethnicity = ["机械"]
    attack = 1
    life = 2
    graded = 1
    descriptionStr(){return "<div><b>嘲讽</b></div><div><b>圣盾</b></div>"}
    isMockery: boolean = true;
    isHolyShield: boolean = true;
}
