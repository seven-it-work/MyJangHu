import CardDb from "../entity/CardDb";
import {GRADED_RULES} from "./Taverns";
import BaseCard from "../entity/baseCard";
import {cloneDeep} from "lodash";
import randomUtil from "../utils/RandomUtils.ts";
import {Serialization} from "../utils/SaveUtils";
import {deserialize, serialize} from "class-transformer";
import BaseCardObj from "./BaseCardObj";
import randomUtils from "../utils/RandomUtils.ts";

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
                this.pool.set(card.classType, new SharedCardPoolData(card.graded, GRADED_RULES[card.graded].cardSize, card))
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

    listByDeadLanguageCard(graded: number | undefined = undefined, size: number = 1): BaseCard[] {
        const baseCards = Array.from(this.pool.values())
            .filter(card => card.baseCard.isSell)
            .filter(card => card.baseCard.type === '随从')
            .filter(card => {
                return card.baseCard.isDeadLanguage;
            }).filter(data => {
                if (graded) {
                    return data.baseCard.graded <= graded;
                }
                return true
            }).map(data => data.baseCard);

        if (size === 1) {
            return [randomUtil.pick(baseCards, size)]
        }
        return randomUtil.pick(baseCards, size);
    }

    listByWarRoarCard(graded: number | undefined = undefined, size: number = 1): BaseCard[] {
        const baseCards = Array.from(this.pool.values())
            .filter(card => card.baseCard.isSell)
            .filter(card => card.baseCard.type === '随从')
            .filter(card => {
                return card.baseCard.isWarRoars;
            }).filter(data => {
                if (graded) {
                    return data.baseCard.graded <= graded;
                }
                return true
            }).map(data => data.baseCard);

        if (size === 1) {
            return [randomUtil.pick(baseCards, size)]
        }
        return randomUtil.pick(baseCards, size);
    }

    listSpell(graded: number, size: number = 1, isGradedConsistent: boolean = false): BaseCard[] {
        const list = Array.from(this.pool.values())
            .filter(card => card.baseCard.isSell)
            .filter(card => card.baseCard.type === '法术')
            .filter(card => {
                if (isGradedConsistent) {
                    return card.baseCard.graded = graded;
                }
                return card.baseCard.graded <= graded
            })
            .map(card => card.baseCard)
        if (list.length <= 0) {
            return []
        }
        if (size === 1) {
            return [randomUtil.pick(list, size)]
        }
        return randomUtil.pick(list, size);
    }

    refreshRandom(cardNumber: number, graded: number, gradedIsItEqual = false): BaseCard[] {
        if (cardNumber <= 0) {
            return []
        }
        const list = Array.from(this.pool.values())
            .filter(card => card.baseCard.isSell)
            .filter(card => card.baseCard.type === '随从')
            .filter(card => {
                return card.remainingQuantity > 0;
            }).filter(card => {
                if (gradedIsItEqual) {
                    return card.baseCard.graded === graded;
                }
                return card.baseCard.graded <= graded
            }).map(card => card.baseCard)
        if (cardNumber === 1) {
            return [randomUtil.pick(list, cardNumber)]
        }
        return randomUtil.pick(list, cardNumber);
    }

    cardOut(baseCard: BaseCard) {
        const newVar = this.pool.get(baseCard.classType);
        if (newVar) {
            newVar.remainingQuantity = Math.max(newVar.remainingQuantity - 1, 0);
        }
    }

    cardIn(baseCard: BaseCard) {
        const newVar = this.pool.get(baseCard.classType);
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
