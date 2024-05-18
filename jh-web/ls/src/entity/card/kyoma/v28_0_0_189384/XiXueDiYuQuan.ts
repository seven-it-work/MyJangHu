import BaseCard from "../../../baseCard";

export default class XiXueDiYuQuanV28 extends BaseCard {
    name = "吸血地狱犬"
    ethnicity = ["恶魔"]
    attack = 3
    life = 3
    graded = 3
    descriptionStr(){return "购买本随从会消耗生命值，而非铸币"}

    isSpendLife: boolean = true;
}
