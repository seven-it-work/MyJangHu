import Player from "./Player";
import SharedCardPool from "./SharedCardPool";

export default class ContextObj {
    player: Player;
    sharedCardPool: SharedCardPool;

    constructor(player: Player, sharedCardPool: SharedCardPool) {
        this.player = player;
        this.sharedCardPool = sharedCardPool;
    }
}
