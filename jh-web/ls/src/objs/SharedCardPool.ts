import CardDb from "../entity/CardDb";
import {GRADED_RULES} from "./Taverns";
import BaseCard from "../entity/baseCard";
import {cloneDeep} from "lodash";
import randomUtil from "../utils/RandomUtils.ts";
import {Serialization} from "../utils/SaveUtils";
import {deserialize, serialize} from "class-transformer";
import BaseCardObj from "./BaseCardObj";

class SharedCardPoolData implements Serialization<SharedCardPoolData> {

    graded: number;
    remainingQuantity: number;
    baseCard: BaseCard;

    constructor(graded: number | undefined, remainingQuantity: number | undefined, baseCard: BaseCard | undefined) {
        if (graded) {
            this.graded = graded;
        }
        if (remainingQuantity) {
            this.remainingQuantity = remainingQuantity;
        }
        if (baseCard) {
            this.baseCard = baseCard;
        }
    }

    deserialize(json: any): SharedCardPoolData {
        if (typeof json === 'string') {
            json = JSON.parse(json)
        }
        this.graded = json.graded
        this.remainingQuantity = json.remainingQuantity
        SharedCardPool.initCardDb()
        this.baseCard = SharedCardPool.initCardDb().getByName(json.baseCard.classType)
        return this;
    }

    serialization(): string {
        return "";
    }
}

export default class SharedCardPool implements Serialization<SharedCardPool> {
    accompanyingRace: string[]
    pool: Map<string, SharedCardPoolData> = new Map<string, SharedCardPoolData>()
    cardDb: CardDb;
    static CARD_DB: CardDb;

    static initCardDb(): CardDb {
        if (!SharedCardPool.CARD_DB) {
            SharedCardPool.CARD_DB = new CardDb();
        }
        return SharedCardPool.CARD_DB
    }

    constructor(accompanyingRace: string[] | undefined) {
        this.cardDb = SharedCardPool.initCardDb();
        if (accompanyingRace) {
            this.accompanyingRace = accompanyingRace;
            const baseCards: BaseCard[] = this.cardDb.listByAccompanyingRace(accompanyingRace);
            baseCards.forEach(card => {
                this.pool.set(card.constructor.name, new SharedCardPoolData(card.graded, GRADED_RULES[card.graded].cardSize, card))
            })
        }
    }

    listByEthnicity(ethnicity: string[], graded: number | undefined = undefined, isMatchAll = false, checkRemainingQuantity: boolean = false): BaseCard[] {
        return Array.from(this.pool.values())
            .filter(card => card.baseCard.isSell)
            .filter(card => {
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
                if (graded) {
                    return data.baseCard.graded <= graded;
                }
                return true
            }).filter(data => {
                if (checkRemainingQuantity) {
                    return data.remainingQuantity > 0;
                }
                return true
            })
            .map(data => data.baseCard);
    }

    listMagneticForceCard(levelLimits: number | undefined = undefined): BaseCard[] {
        return Array.from(this.pool.values())
            .filter(card => card.baseCard.isSell)
            .filter(card => {
                return card.baseCard.isMagneticForce;
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
        const list = Array.from(this.pool.values())
            .filter(card => card.baseCard.isSell)
            .filter(card => {
                return card.remainingQuantity > 0;
            }).filter(card => {
                return card.baseCard.graded <= graded
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
            let size = 1;
            if (baseCard.isGold) {
                size = 3
            }
            newVar.remainingQuantity = Math.min(newVar.remainingQuantity + size, GRADED_RULES[baseCard.graded].cardSize);
        }
    }

    getByName(name: string): BaseCard {
        return SharedCardPool.initCardDb().getByName(name);
    }

    deserialize(json: any): SharedCardPool {
        if (typeof json === 'string') {
            json = JSON.parse(json)
        }
        this.accompanyingRace = json.accompanyingRace
        Object.keys(json.pool).forEach(k => {
            this.pool.set(k, new SharedCardPoolData(undefined, undefined, undefined).deserialize(json.pool[k]))
        })
        return this;
    }

    serialization(): string {
        return serialize(this);
    }
}
