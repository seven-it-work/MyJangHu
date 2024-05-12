import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import randomUtil from "../../../utils/RandomUtils.ts";
import BaseCardObj from "../../../objs/BaseCardObj.ts";

export default class XiXueDiYuQuan extends BaseCard {
    name = "吸血地狱犬"
    ethnicity = ["恶魔"]
    attack = 3
    life = 3
    graded = 3
    description = "购买本随从会消耗生命值，而非铸币"

    isSpendLife: boolean = true;
}
