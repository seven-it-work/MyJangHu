import {randomUtil} from "../random";

export class ProbabilisticActuators {
    action? = () => {
    }

    weight: number;

    static run(probabilisticActuators: ProbabilisticActuators[]) {
        if (!probabilisticActuators) {
            return
        }
        if (!probabilisticActuators.length) {
            return;
        }
        const sum = probabilisticActuators.map(item => item.weight).reduce((a, b) => a + b, 0);
        let tempSum = 0;
        const random = randomUtil.integer({min: 1, max: sum})
        for (let i = 0; i < probabilisticActuators.length; i++) {
            const temp = probabilisticActuators[i];
            tempSum += temp.weight;
            if (tempSum >= random) {
                if (temp.action) {
                    temp.action()
                }
                return;
            }
        }
        console.log(`执行失败sum=${sum};random=${random};probabilisticActuators=${probabilisticActuators}`)
    }
}
