import CardDb from "../entity/CardDb";
import {GRADED_RULES} from "./Taverns";
import Chance from 'chance'
import BaseCard from "../entity/baseCard";
import {cloneDeep} from "lodash";

export default class SharedCardPool {
    accompanyingRace: String[]
    pool = new Map()
    cardDb: CardDb;

    constructor(accompanyingRace: String[]) {
        this.accompanyingRace = accompanyingRace;
        const cardDb = new CardDb();
        this.cardDb = cardDb;
        const baseCards: BaseCard[] = cardDb.listByAccompanyingRace(accompanyingRace);
        baseCards.forEach(card => {
            this.pool.set(card.constructor.name, {
                graded: card.graded,
                remainingQuantity: GRADED_RULES[card.graded].cardSize,
                baseCard: card
            })
        })
    }

    refreshRandom(graded: Number): BaseCard[] {
        const cardNumber = GRADED_RULES[graded].cardNumber;
        const list = Array.from(this.pool.values()).filter(card => {
            return card.remainingQuantity > 0;
        }).filter(card => {
            return card.graded <= graded
        }).map(card => card.baseCard)
        return new Chance().pick(list, cardNumber);
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

    getByName(name: String): BaseCard {
        return cloneDeep(this.cardDb.getByName(name));
    }
}
