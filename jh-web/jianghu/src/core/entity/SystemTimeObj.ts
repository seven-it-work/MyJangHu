import dayjs from "dayjs";
import {CoreContext} from "./CoreContext";

export class SystemTimeObj {
    gameTime: number;
    readonly realTime: number;

    constructor(gameTime: number) {
        this.gameTime = gameTime;
        this.realTime = new Date().getTime()
    }

    getStrFormat(): string {
        return dayjs(this.gameTime).format("YYYY-MM-DD HH:mm:ss");
    }
    doSomething(context:CoreContext){
        this.gameTime += 10000;
    }

}