import Chance from 'chance'

const randomUtil = new Chance()

 const pick = (list: any[], number: number=1): any[] => {
    if (list.length <= 0) {
        return []
    }
    if (number <= 0) {
        return []
    } else if (number === 1) {
        return [randomUtil.pick(list, number)];
    }
    return randomUtil.pick(list, number);
}

export const utils={
    pick,
}
export default randomUtil;
