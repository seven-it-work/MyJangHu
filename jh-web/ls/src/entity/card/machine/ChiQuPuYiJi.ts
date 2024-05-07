import BaseCard from "../../baseCard";

export default class ChiQuPuYiJi extends BaseCard {
    name = "齿驱扑翼机"
    ethnicity = ["机械"]
    attack = 1
    life = 1
    graded = 2
    description = "<div><b>圣盾</b></div>在一个友方随从失去圣盾后，在你手牌中的一张随从获得+1/+1。"
    isHolyShield: boolean = true;

    // todo 监听圣盾消失
}

