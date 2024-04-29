import BaseCard from "./baseCard";
import cardStorage from "./card/CardStorage";

export default class CardDb {
    private readonly cardMap: Map<String, BaseCard> = new Map<String, BaseCard>()

    constructor() {
        cardStorage.forEach((v, k) => {
            this.cardMap.set(k, new (v)())
        })
    }

    listByAccompanyingRace(accompanyingRace: String[] = []): BaseCard[] {
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
        return this.cardMap.get(name);
    }
}
