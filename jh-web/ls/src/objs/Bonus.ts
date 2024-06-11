import BaseCardObj from "./BaseCardObj";

export interface Bonus {
    markupValue: number;
    baseCardId: string;
    baseCardName: string;
}


export interface BonusPlayer extends Bonus {

    judgmentType(baseCardObj: BaseCardObj): boolean
}

export const BonusCreatUtil = (currentCard: BaseCardObj, value: number): Bonus => {
    return {baseCardId: currentCard.id, baseCardName: currentCard.baseCard.name, markupValue: value}
}
export const BonusPlayerCreatUtil = (currentCard: BaseCardObj, value: number, judgmentType): BonusPlayer => {
    return {
        baseCardId: currentCard.id, baseCardName: currentCard.baseCard.name, markupValue: value, judgmentType,
    }
}
