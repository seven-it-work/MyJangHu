import PlayObj from "../objs/PlayObj";
import SharedCardPool from "../objs/SharedCardPool";
import Taverns from "../objs/Taverns";
import Player from "../objs/Player";
import ContextObj from "../objs/ContextObj";

export interface Serialization<T> {
    serialization(): string;

    deserialize(json: string | any);
}

function load(json: string): PlayObj {
    return undefined
}

export default {
    load
}
