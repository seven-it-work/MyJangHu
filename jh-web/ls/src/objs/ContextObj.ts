import Player from "./Player";
import SharedCardPool from "./SharedCardPool";

export default class ContextObj {
    sharedCardPool: SharedCardPool;

    currentRound: number = 1;

    constructor(sharedCardPool: SharedCardPool | undefined) {
        if (sharedCardPool) {
            this.sharedCardPool = sharedCardPool;
        }
    }
}
