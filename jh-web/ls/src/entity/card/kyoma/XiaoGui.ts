import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import randomUtil from "../../../utils/RandomUtils.ts";
import BaseCardObj from "../../../objs/BaseCardObj.ts";

export default class XiaoGui extends BaseCard {
    name = "小鬼"
    ethnicity = ["恶魔"]
    attack = 1
    life = 1
    graded = 1
    description = "我是小鬼，我最帅"
    isSell: boolean = false;
}
