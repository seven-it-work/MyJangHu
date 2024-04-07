import dayjs from "dayjs";
import {CoreContext} from "./CoreContext";
import {formatTime} from "@/core/utils";


export class SystemTimeObj {
    gameTime: number;
    readonly realTime: number;

    constructor(gameTime: number) {
        this.gameTime = gameTime;
        this.realTime = new Date().getTime()
    }

    getStrFormat(): string {
        return formatTime(dayjs(this.gameTime));
    }

    doSomething(context: CoreContext) {
        this.gameTime += 1000 * 60 * 60 * 24;
    }

}
