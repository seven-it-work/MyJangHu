import BaseCard from "./baseCard";
import {cloneDeep} from "lodash";
import CardStorage from "./card/V29_4_2_199503/CardStorage";

export default class CardDb {
    private readonly cardMap: Map<String, BaseCard> = new Map<String, BaseCard>()

    constructor() {
        CardStorage.forEach((v, k) => {
            const value = new (v)();
            value.classType = k;
            this.cardMap.set(k, value)
        })
    }

    listByAccompanyingRace(accompanyingRace: String[] = []): BaseCard[] {
        accompanyingRace.push('酒馆')
        accompanyingRace.push('中立')
        accompanyingRace.push('伙伴')
        return Array.from(this.cardMap.values()).filter(card => {
            for (let race of card.accompanyingRace) {
                if (accompanyingRace.includes(race)) {
                    return true
                }
            }
            for (let race of card.ethnicity) {
                if (accompanyingRace.includes(race)) {
                    return true
                }
            }
            return false
        });
    }

    getByName(name: String): BaseCard {
        return <BaseCard>cloneDeep(this.cardMap.get(name));
    }
}
