import {ProbabilisticActuator} from "@/view/game/core/ProbabilisticActuator.js";

export default class {
    id;
    xing;
    ming;
    name;
    sex;
    description;
    remark;
    currentSceneObj;
    currentSceneId;
    interactionIdList;
    peopleType;
    createTime;
    updateTime;

    aiBehavior() {
        ProbabilisticActuator.run([
            new ProbabilisticActuator(() => {
                // 什么都不做
                // console.log("什么都不做")
            }, 10),
            new ProbabilisticActuator(() => {
                // 移动 50节点，30城市 20国家
                // console.log("移动")
            }, 10),
        ])
    }
}
