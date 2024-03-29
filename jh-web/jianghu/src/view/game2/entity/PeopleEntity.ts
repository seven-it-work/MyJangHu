import {system} from "./System";

export enum SEX {
    MAN,
    WOMAN
}

export interface People {
    birth: number;
    name: string;
    sex: SEX;
    pregnant: People;
    shouYuan: number;
    hp: number;

    isPregnant(): boolean;

    isDead(): boolean
}

export class ProbabilityObject {
    action?: () => void;
    weight: number = 0;
    name: string;
}


export class PeopleEntity implements People {
    birth: number;
    name: string;
    sex: SEX;
    pregnant: People;
    pregnantTime: number;
    pregnantTimes: number;
    loverList: People[] = [];
    spouseList: People[] = [];
    childList: People[] = [];
    shouYuan: number;
    hp: number;

    public isPregnant(): boolean {
        return !this.pregnant
    }

    /**
     * 当前时间-出生时间>寿元
     * hp<=0
     * @private
     */
    public isDead(): boolean {
        if (this.hp <= 0) {
            return true
        }
        if ((system.gameTime || 0) - (this.birth || 0) > this.shouYuan || 0) {
            return true
        }
        return false
    }

    public doAttack(targetPeople: People) {
        // 关系越好越不可能起来
    }

    public doConversation(targetPeople: People) {
        // 闲聊、辱骂、乞讨、问好
        const list: ProbabilityObject[] = [
            {
                name: "闲聊",
                weight: 10,
                action: () => {
                    console.log(`${this.name}和${targetPeople.name}进行交流`)
                }
            }
        ]
    }

    public doMakeLove(targetPeople: People) {
        if (targetPeople.isPregnant()) {
            return
        }
        if (this.isPregnant()) {
            return;
        }
        if (targetPeople.isDead()) {
            // jian shi
            return;
        }
        console.log(`${this.name}和${targetPeople.name}成为做a`)
    }

    public toBreakUp(targetPeople: People) {
        console.log(`${this.name}和${targetPeople.name}成为分手`)
    }

    public toBecomeLover(targetPeople: People) {
        console.log(`${this.name}和${targetPeople.name}成为情侣`)
    }

    public toBecomeHusbandAndWife(targetPeople: People) {
        console.log(`${this.name}和${targetPeople.name}成为夫妻`)
    }

    public toDivorce(targetPeople: People) {
        console.log(`${this.name}和${targetPeople.name}成为离婚`)
    }
}

export const createPeople = (people: People) => {
    const peopleEntity = new PeopleEntity();
    Object.assign(peopleEntity, people)
    return peopleEntity;
}


