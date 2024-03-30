import {randomUtil} from "@/random.js";

export class ProbabilisticActuator {

    constructor(action, weight) {
        this.action = action;
        this.weight = weight;
    }

    action = () => {
    };

    weight = 0

    static run(probabilisticActuator) {
        if (!probabilisticActuator) {
            return
        }
        if (!probabilisticActuator.length) {
            return
        }
        const sum = probabilisticActuator.map(item => item.weight).reduce((a, b) => a + b, 0)
        let tempSum = 0;
        const random = randomUtil.integer({min: 0, max: sum})

        for (let i = 0; i < probabilisticActuator.length; i++) {
            const temp = probabilisticActuator[i];
            tempSum += temp.weight;
            if (tempSum >= random) {
                temp.action()
                return;
            }
        }
        console.log(`执行错误。sum=${sum},random=${random},tempSum=${tempSum},probabilisticActuator=${probabilisticActuator}`)
    }
}
