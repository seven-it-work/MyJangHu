import PlayObj from "../objs/PlayObj";


export interface Serialization<T> {
    serialization(): string;

    deserialize(json: string | any);
}

function load(json: string): PlayObj {
    return new PlayObj(undefined, undefined).deserialize(json)
}

function save(playObj: PlayObj): string {
    return playObj.serialization();
}

export default {
    load, save
}
