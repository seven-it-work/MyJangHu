import BaseCardObj from "./BaseCardObj";

export interface Bonus {
    markupValue: number;
    baseCardId: string;
    baseCardName: string;
}


export interface BonusPlayer extends Bonus {

    judgmentType(baseCardObj: BaseCardObj): boolean
}
