import dayjs from "dayjs";

export const formatTime=(dayjsObj:dayjs.Dayjs):string=>{
    return dayjsObj.format("YYYY-MM-DD HH:mm:ss")
}
