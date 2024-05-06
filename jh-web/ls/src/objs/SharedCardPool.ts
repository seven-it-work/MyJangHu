import CardDb from "../entity/CardDb";
import {GRADED_RULES} from "./Taverns";
import BaseCard from "../entity/baseCard";
import {cloneDeep} from "lodash";
import randomUtil from "../utils/RandomUtils.ts";

class SharedCardPoolData {

    graded: number;
    remainingQuantity: number;
    baseCard: BaseCard;

    constructor(graded: number, remainingQuantity: number, baseCard: BaseCard) {
        this.graded = graded;
        this.remainingQuantity = remainingQuantity;
        this.baseCard = baseCard;
    }
}

export default class SharedCardPool {
    accompanyingRace: string[]
    pool: Map<string, SharedCardPoolData> = new Map<string, SharedCardPoolData>()
    cardDb: CardDb;

    constructor(accompanyingRace: string[]) {
        this.accompanyingRace = accompanyingRace;
        const cardDb = new CardDb();
        this.cardDb = cardDb;
        const baseCards: BaseCard[] = cardDb.listByAccompanyingRace(accompanyingRace);
        baseCards.forEach(card => {
            this.pool.set(card.constructor.name, new SharedCardPoolData(card.graded, GRADED_RULES[card.graded].cardSize, card))
        })
    }

    listByEthnicity(ethnicity: string[], levelLimits: number | undefined = undefined, isMatchAll = false): BaseCard[] {
        return Array.from(this.pool.values()).filter(card => {
            if (isMatchAll) {
                const ethnicityData = ethnicity.filter(str => {
                    return card.baseCard.ethnicity.includes(str)
                }).length
                return ethnicityData === ethnicity.length;
            } else {
                return ethnicity.filter(str => {
                    return card.baseCard.ethnicity.includes(str)
                }).length > 0;
            }
        }).filter(data => {
            if (levelLimits) {
                return data.baseCard.graded <= levelLimits;
            }
            return true
        }).map(data => data.baseCard);
    }

    refreshRandom(cardNumber: number, graded: number): BaseCard[] {
        if (cardNumber <= 0) {
            return []
        }
        const list = Array.from(this.pool.values()).filter(card => {
            return card.remainingQuantity > 0;
        }).filter(card => {
            return card.baseCard.graded <= graded
        }).filter(card => {
            return card.baseCard.isSell
        }).map(card => card.baseCard)
        return randomUtil.pick(list, cardNumber);
    }

    cardOut(baseCard: BaseCard) {
        const newVar = this.pool.get(baseCard.constructor.name);
        if (newVar) {
            newVar.remainingQuantity = Math.max(newVar.remainingQuantity - 1, 0);
        }
    }

    cardIn(baseCard: BaseCard) {
        const newVar = this.pool.get(baseCard.constructor.name);
        if (newVar) {
            newVar.remainingQuantity = Math.min(newVar.remainingQuantity + 1, GRADED_RULES[baseCard.graded].cardSize);
        }
    }

    getByName(name: string): BaseCard {
        return cloneDeep(this.cardDb.getByName(name));
    }
}
