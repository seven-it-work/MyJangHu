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

    refreshRandom(graded: number): BaseCard[] {
        const cardNumber = GRADED_RULES[graded].cardNumber;
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
