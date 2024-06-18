import BaseCardObj from "./BaseCardObj";

export interface Bonus {
    markupValue: number;
    baseCardId: string;
    baseCardName: string;
    classType: string;
}


export interface BonusPlayer extends Bonus {

    judgmentType(baseCardObj: BaseCardObj): boolean
}

export interface BonusProperty extends Bonus {
    /**
     * 回合结束时，属性处理器
     * @param baseCardObj
     */
    endRoundImpactMethod?(baseCardObj: BaseCardObj)

    /**
     * 回合开始时，属性处理器
     * @param baseCardObj
     */
    startRoundImpactMethod?(baseCardObj: BaseCardObj)
}

export const BonusCreatUtil = (currentCard: BaseCardObj, value: number): Bonus => {
    return {
        baseCardId: currentCard.id,
        baseCardName: currentCard.baseCard.name,
        markupValue: value,
        classType: currentCard.baseCard.classType
    }
}
export const BonusPlayerCreatUtil = (currentCard: BaseCardObj, value: number, judgmentType): BonusPlayer => {
    return {
        baseCardId: currentCard.id,
        baseCardName: currentCard.baseCard.name,
        markupValue: value,
        judgmentType,
        classType: currentCard.baseCard.classType
    }
}
export const BonusPropertyCreatUtil = (currentCard: BaseCardObj,startRoundImpactMethod,endRoundImpactMethod): BonusProperty => {
    return {
        baseCardId: currentCard.id,
        baseCardName: currentCard.baseCard.name,
        markupValue: 0,
        classType: currentCard.baseCard.classType,
        startRoundImpactMethod: startRoundImpactMethod,
        endRoundImpactMethod: endRoundImpactMethod,
    }
}
