import Player from "./Player";
import SharedCardPool from "./SharedCardPool";
import {Serialization} from "../utils/SaveUtils";

export default class ContextObj implements Serialization<ContextObj> {
    sharedCardPool: SharedCardPool;

    currentRound: number = 1;

    constructor(sharedCardPool: SharedCardPool | undefined) {
        if (sharedCardPool) {
            this.sharedCardPool = sharedCardPool;
        }
    }

    deserialize(json: any) {
        let dataObj = json;
        if (typeof json === 'string') {
            dataObj = JSON.parse(json)
        }
        this.currentRound = dataObj.currentRound
        return this;
    }

    serialization(): string {
        return JSON.stringify({currentRound: this.currentRound});
    }
}
