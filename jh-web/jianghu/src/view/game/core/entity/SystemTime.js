import dayjs from "dayjs";

export default class {
    systemTime;

    getFormatStr(){
        return dayjs(this.systemTime).format("YYYY-MM-DD HH:mm:ss")
    }
    constructor(systemTime) {
        if (!systemTime){
            systemTime=new Date().getTime()
        }
        this.systemTime = systemTime;
    }
}
