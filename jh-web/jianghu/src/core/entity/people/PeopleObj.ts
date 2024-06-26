import {people} from "@/http/api";
import {CoreContext} from "@/core/entity/CoreContext";
import {ProbabilisticActuators} from "../../ProbabilisticActuators";
import {SceneObj} from "@/core/entity/SceneObj";
import {randomList, randomUtil} from "@/random";
import {CityObj} from "@/core/entity/CityObj";
import {WorldObj} from "@/core/entity/WorldObj";
import {getName} from "random_chinese_fantasy_names";
import core from "@/core/core";
import dayjs from "dayjs";
import {SexType} from "@/core/entity/people/SexType";
import {getRelationPair, Relationship, RelationshipType} from "@/core/entity/people/Relationship";

export interface PeopleInterface {
    description: string;
    id: string;
    xing: string;
    ming: string;
    sex: SexType;

    remark: string;
    currentSceneObj: SceneObj;
    currentSceneId: string;
    interactionIdList: string;
    peopleType: string;
    currentCityObj: CityObj;
    currentCityId: string;
    currentWorldObj: WorldObj;
    currentWorldId: string;
    eventProcessingTime: number;
    lingLi: number;
    gainLingLiSpeed: number;// 每次获取量
    currentlyProgress: 'gainLingLi' | 'gainGold' | undefined;
    relationShipMap: Map<string, Relationship>;
    birthDay: number;// 出生时间
}

export class PeopleObj implements PeopleInterface {
    relationShipMap: Map<string, Relationship> = new Map<string, Relationship>();
    description: string;
    id: string;
    xing: string;
    ming: string;
    private _name: string;

    set name(value: string) {
        this._name = value;
    }

    get name(): string {
        return this.xing + this.ming;
    }

    get age(): number {
        return dayjs(core.systemTimeObj.gameTime).diff(dayjs(this.birthDay), 'year');
    }

    sex: SexType;
    remark: string;
    currentSceneObj: SceneObj;
    private _currentSceneId: string;
    currentCityObj: CityObj;
    private _currentCityId: string;
    currentWorldObj: WorldObj;
    private _currentWorldId: string;
    interactionIdList: string;
    peopleType: string = "AI_PEOPLE";
    eventProcessingTime: number;// 事件执行持续时间

    lingLi: number = 0;
    gainLingLiSpeed: number = 1;// 每次获取量
    currentlyProgress: 'gainLingLi' | 'gainGold' | undefined;

    pregnant: PeopleObj;
    numberOfPregnancies: number = 0;// 怀孕次数 todo 最多怀孕次数
    timeOfPregnancy: number;// 怀孕时间
    birthDay: number;// 出生时间
    father: PeopleObj;
    mother: PeopleObj;
    private dystociaCheckTimes: number = 0;// 难产检查计数器

    isPregnant() {
        return !!this.pregnant
    }


    processingEfficiency(context: CoreContext) {
        if (this.eventProcessingTime) {
            return Math.min(1, (context.systemTimeObj.gameTime - this.eventProcessingTime) / (1000 * 500))
        }
        return 0;
    }

    getName(): string {
        return this.xing + this.ming
    }

    constructor(data: PeopleInterface | undefined = undefined) {
        if (data) {
            Object.assign(this, data);
        }
    }

    changeRelationShip(addValue: number, target: PeopleObj, isUpdateTarget: boolean = true) {
        let relationship: Relationship = this.relationShipMap.get(target.id);
        if (!relationship) {
            relationship = {
                relationship: RelationshipType.STRANGER,
                relationshipValue: 0
            }
        }

        relationship.relationshipValue = Math.max(Math.min(relationship.relationshipValue + addValue, 300), -200)
        this.relationShipMap.set(target.id, relationship)
        if (isUpdateTarget) {
            // console.log(`${this.getName()}(${this.sex})和${target.getName()}(${target.sex})关系增加${addValue}，当前关系值${relationship.relationshipValue}`)
            target.changeRelationShip(addValue, this, false)
        }
    }

    changeRelationShipType(target: PeopleObj, targetRelationshipType: RelationshipType, isUpdateTarget: boolean = true, relationshipValue = 0) {
        let relationship: Relationship = this.relationShipMap.get(target.id);
        if (!relationship) {
            relationship = {
                relationship: targetRelationshipType,
                relationshipValue: relationshipValue
            }
        }
        relationship.relationship = targetRelationshipType
        this.relationShipMap.set(target.id, relationship);

        const relationPair = getRelationPair(targetRelationshipType);
        if (isUpdateTarget) {
            target.changeRelationShipType(this, relationPair, false, relationship.relationshipValue);
        }
    }

    getSexStr() {
        if (this.sex === 'MAN') {
            return '男'
        }
        if (this.sex === 'WOMAN') {
            return '女'
        }
        return '未知'
    }

    listAllHusbandAndWife(): Map<string, Relationship> {
        const resultMap = new Map()
        this.relationShipMap.forEach((v, id) => {
            if (v.relationship === RelationshipType.HUSBAND || v.relationship === RelationshipType.WIFE) {
                resultMap.set(id, v);
            }
        })
        return resultMap
    }

    doMakeLove(target: PeopleObj, type: string) {
        // console.log(`${this.getName()}(${this.sex})和${target.getName()}(${target.sex})进行运动。关系类型:${type}`)
        let pregnantPeople: PeopleObj = undefined
        if (this.isPregnant()) {
            pregnantPeople = this;
        } else if (target.isPregnant()) {
            pregnantPeople = target;
        }
        if (!!pregnantPeople) {
            // 概率丢失
            this.dystocia(50, pregnantPeople, "有孕，还运动")
        } else if ((this.sex === SexType.MAN && target.sex === SexType.WOMAN) ||
            (this.sex === SexType.WOMAN && target.sex === SexType.MAN)) {
            console.log(pregnantPeople)
            console.log(this.isPregnant(), target.isPregnant())
            let father
            if (this.sex === SexType.WOMAN) {
                pregnantPeople = this
                father = target
            } else {
                pregnantPeople = target
                father = this
            }
            // 概率有kid
            let inabilityToConceiveBase = 0
            if (pregnantPeople.age > 30) {
                // 30以上是高龄产妇
                inabilityToConceiveBase += (pregnantPeople.age - 30) / 5
            } else if (pregnantPeople.age < 16) {
                // 16以下是低龄产妇
                inabilityToConceiveBase += 16 - pregnantPeople.age
            }
            if (father.age > 65) {
                inabilityToConceiveBase += (father.age - 65) / 10
            } else if (father.age < 14) {
                inabilityToConceiveBase += 14 - father.age
            }
            ProbabilisticActuators.run([
                {
                    weight: this.numberOfPregnancies * 2 + (inabilityToConceiveBase * 10), action: () => {
                    },
                },
                {
                    weight: 1, action: () => {
                        const peopleObj = new PeopleObj();
                        peopleObj.id = randomUtil.guid();
                        peopleObj.sex = randomList.randomFormList([SexType.MAN, SexType.WOMAN])
                        peopleObj.xing = father.xing
                        const name = getName(1, {
                            isFemale: peopleObj.sex === SexType.WOMAN,
                            familyName: father.xing
                        })[0]
                        peopleObj.ming = name.substring(father.xing.length)
                        peopleObj.father = father
                        peopleObj.mother = pregnantPeople

                        pregnantPeople.timeOfPregnancy = core.systemTimeObj.gameTime;
                        pregnantPeople.pregnant = peopleObj;
                        pregnantPeople.numberOfPregnancies += 1;
                        this.dystociaCheckTimes = 0;
                        // todo 这里有bug
                        console.log(`${pregnantPeople.getName()}怀孕了`)
                        console.log(pregnantPeople.isPregnant(), this.isPregnant(), target.isPregnant())
                    },
                },
            ])
        }
    }

    executePerformSocializing(context: CoreContext) {
        const sceneObj = context.sceneMap.get(this.currentSceneObj?.id);
        if (!sceneObj) {
            return
        }
        const peopleObj: PeopleObj = randomList.randomFormList(Array.from(sceneObj.peopleObjList.values()).filter(item => item.id !== this.id))
        if (!peopleObj) {
            return;
        }
        const relationship = this.relationShipMap.get(peopleObj.id);
        if (!relationship) {
            // 清理关系为0的对象
            const newRelationShipMap = new Map();
            this.relationShipMap.forEach((v, id) => {
                if (v.relationshipValue !== 0) {
                    newRelationShipMap.set(id, v);
                }
            })
            this.relationShipMap = newRelationShipMap
            // 每个人最多100个关系
            if (this.relationShipMap.size >= 100) {
                return;
            }
        }
        ProbabilisticActuators.run([
            {
                weight: 10, action: () => {
                    // 什么都不做
                }
            },
            {
                weight: 10, action: () => {
                    // 运动 14岁才能运动
                    if (this.age < 14 || peopleObj.age < 14) {
                        return;
                    }
                    if (!relationship) {
                        return
                    }
                    const isPregnant = this.isPregnant() || peopleObj.isPregnant()
                    let baseValue = 1;
                    if (isPregnant) {
                        // baseValue越大越不愿意
                        baseValue += 10;
                    }
                    if (this.isNextOfKin(peopleObj)) {
                        baseValue += 5;
                    }
                    if (this.isNextOfKin(peopleObj)) {
                        ProbabilisticActuators.run([
                            {
                                weight: 400 * baseValue, action: () => {
                                }
                            },
                            {
                                weight: relationship.relationshipValue, action: () => {
                                    // 愿意
                                    this.doMakeLove(peopleObj, "近亲")
                                }
                            },
                        ])
                    } else if (this.isHusbandAndWife(peopleObj)) {
                        ProbabilisticActuators.run([
                            {
                                weight: 60 * baseValue * baseValue * baseValue, action: () => {
                                }
                            },
                            {
                                weight: relationship.relationshipValue, action: () => {
                                    // 愿意
                                    this.doMakeLove(peopleObj, "夫妻")
                                }
                            },
                        ])
                    } else if (this.isLover(peopleObj)) {
                        ProbabilisticActuators.run([
                            {
                                weight: 90 * baseValue * baseValue, action: () => {
                                }
                            },
                            {
                                weight: relationship.relationshipValue, action: () => {
                                    // 愿意
                                    this.doMakeLove(peopleObj, "情侣")
                                }
                            },
                        ])
                    } else if (this.isParentsAndChildren(peopleObj)) {
                        ProbabilisticActuators.run([
                            {
                                weight: 350 * baseValue, action: () => {
                                }
                            },
                            {
                                weight: relationship.relationshipValue, action: () => {
                                    // 愿意
                                    this.doMakeLove(peopleObj, "父母")
                                }
                            },
                        ])
                    } else {
                        ProbabilisticActuators.run([
                            {
                                weight: 250 * baseValue, action: () => {
                                }
                            },
                            {
                                weight: relationship.relationshipValue, action: () => {
                                    // 愿意
                                    this.doMakeLove(peopleObj, "陌生人")
                                }
                            },
                        ])
                    }
                }
            },
            {
                weight: 30, action: () => {
                    // 问候
                    // // console.log(`${this.getName()}向${peopleObj.getName()}进行问候`)
                    const value: number = randomUtil.integer({min: -1, max: 5})
                    this.changeRelationShip(value, peopleObj)
                }
            },
            {
                weight: 20, action: () => {
                    // 讨好
                    // // console.log(`${this.getName()}向${peopleObj.getName()}进行讨好`)
                    const value: number = randomUtil.integer({min: -2, max: 10})
                    this.changeRelationShip(value, peopleObj)
                }
            },
            {
                weight: 10, action: () => {
                    // 辱骂
                    // console.log(`${this.getName()}向${peopleObj.getName()}进行辱骂`)
                    const value: number = randomUtil.integer({min: -6, max: 1})
                    this.changeRelationShip(value, peopleObj)
                }
            },
            {
                weight: 10, action: () => {
                    // 表白，如果是情侣+关系，不是查看是否达到60 不是-- 是概率成功
                    if (this.age < 12 || peopleObj.age < 12) {
                        // 12岁才能表白
                        return;
                    }
                    if (relationship) {
                        // console.log(`${this.getName()}向${peopleObj.getName()}进行表白，当前关系值${relationship.relationshipValue}`)
                        if (this.isHusbandAndWife(peopleObj)) {
                            const value: number = randomUtil.integer({min: -1, max: 10})
                            this.changeRelationShip(value, peopleObj)
                        } else if (this.isLover(peopleObj)) {
                            const value: number = randomUtil.integer({min: -1, max: 10})
                            this.changeRelationShip(value, peopleObj)
                        } else if (relationship.relationshipValue >= 60) {
                            // 概率成功
                            ProbabilisticActuators.run([
                                {
                                    weight: 40, action: () => {
                                        const value: number = randomUtil.integer({min: -1, max: 1})
                                        this.changeRelationShip(value, peopleObj)
                                    }
                                },
                                {
                                    weight: relationship.relationshipValue, action: () => {
                                        if (this.sex === "MAN") {
                                            this.changeRelationShipType(peopleObj, RelationshipType.GIRL_FRIEND)
                                        } else {
                                            this.changeRelationShipType(peopleObj, RelationshipType.BOY_FRIEND)
                                        }
                                        // console.log(`${this.getName()}(${this.sex})和${peopleObj.getName()}(${peopleObj.sex})成为情侣`)
                                    }
                                },
                            ])
                        } else {
                            // 概率--
                            ProbabilisticActuators.run([
                                {
                                    weight: 30, action: () => {
                                        const value: number = randomUtil.integer({min: -2, max: 2})
                                        this.changeRelationShip(value, peopleObj)
                                    }
                                },
                                {
                                    weight: relationship.relationshipValue, action: () => {
                                        const value: number = randomUtil.integer({min: -1, max: 3})
                                        this.changeRelationShip(value, peopleObj)
                                    }
                                },
                            ])
                        }
                    } else {
                        // 不理睬
                    }
                }
            },
            {
                weight: 10, action: () => {
                    if (this.age < 12 || peopleObj.age < 12) {
                        // 12岁才能表白
                        return;
                    }
                    // 分手
                    if (relationship) {
                        if (this.isLover(peopleObj)) {
                            // console.log(`${this.getName()}向${peopleObj.getName()}提出分手`)
                            // 概率成功
                            ProbabilisticActuators.run([
                                {
                                    weight: 40, action: () => {
                                        const value: number = randomUtil.integer({min: -20, max: 1})
                                        this.changeRelationShip(value, peopleObj)
                                        this.changeRelationShipType(peopleObj, RelationshipType.STRANGER)
                                        // console.log(`${this.getName()}(${this.sex})和${peopleObj.getName()}(${peopleObj.sex})分手了`)
                                    }
                                },
                                {
                                    weight: relationship.relationshipValue, action: () => {
                                        const value: number = randomUtil.integer({min: -10, max: 1})
                                        this.changeRelationShip(value, peopleObj)
                                    }
                                },
                            ])
                        } else {
                            const value: number = randomUtil.integer({min: -5, max: 1})
                            this.changeRelationShip(value, peopleObj)
                        }
                    }
                }
            },
            {
                weight: 10, action: () => {
                    // 求婚
                    if (this.age < 16 || peopleObj.age < 16) {
                        // 16岁才能结婚
                        return;
                    }
                    if (relationship) {
                        if (this.isLover(peopleObj)) {
                            // console.log(`${this.getName()}向${peopleObj.getName()}求婚`)
                            if (this.isHusbandAndWife(peopleObj)) {
                                const value: number = randomUtil.integer({min: -1, max: 20})
                                this.changeRelationShip(value, peopleObj)
                            } else if (relationship.relationshipValue >= 120) {
                                // 概率成功
                                ProbabilisticActuators.run([
                                    {
                                        weight: 80, action: () => {
                                            const value: number = randomUtil.integer({min: -1, max: 1})
                                            this.changeRelationShip(value, peopleObj)
                                        }
                                    },
                                    {
                                        weight: relationship.relationshipValue / (Array.from(this.listAllHusbandAndWife().values()).length + 1),
                                        action: () => {
                                            if (this.sex === "MAN") {
                                                this.changeRelationShipType(peopleObj, RelationshipType.WIFE)
                                            } else {
                                                this.changeRelationShipType(peopleObj, RelationshipType.HUSBAND)
                                            }
                                            // console.log(`${this.getName()}(${this.sex})和${peopleObj.getName()}(${peopleObj.sex})成为夫妻`)
                                        }
                                    },
                                ])
                            } else {
                                // 概率--
                                ProbabilisticActuators.run([
                                    {
                                        weight: 60, action: () => {
                                            const value: number = randomUtil.integer({min: -2, max: 2})
                                            this.changeRelationShip(value, peopleObj)
                                        }
                                    },
                                    {
                                        weight: relationship.relationshipValue, action: () => {
                                            const value: number = randomUtil.integer({min: -1, max: 3})
                                            this.changeRelationShip(value, peopleObj)
                                        }
                                    },
                                ])
                            }
                        } else {
                            const value: number = randomUtil.integer({min: -4, max: 1})
                            this.changeRelationShip(value, peopleObj)
                        }
                    }
                }
            },
            {
                weight: 10, action: () => {
                    if (this.age < 16 || peopleObj.age < 16) {
                        // 16岁才能结婚
                        return;
                    }
                    // 离婚
                    if (relationship) {
                        if (this.isHusbandAndWife(peopleObj)) {
                            // console.log(`${this.getName()}向${peopleObj.getName()}提出离婚`)
                            // 概率成功
                            ProbabilisticActuators.run([
                                {
                                    weight: 80, action: () => {
                                        const value: number = randomUtil.integer({min: -40, max: 1})
                                        this.changeRelationShip(value, peopleObj)
                                        this.changeRelationShipType(peopleObj, RelationshipType.STRANGER)
                                        // console.log(`${this.getName()}(${this.sex})和${peopleObj.getName()}(${peopleObj.sex})离婚了`)
                                    }
                                },
                                {
                                    weight: relationship.relationshipValue, action: () => {
                                        const value: number = randomUtil.integer({min: -20, max: 1})
                                        this.changeRelationShip(value, peopleObj)
                                    }
                                },
                            ])
                        } else {
                            const value: number = randomUtil.integer({min: -5, max: 1})
                            this.changeRelationShip(value, peopleObj)
                        }
                    }
                }
            },
        ])
    }

    executeLingLiPower(context: CoreContext) {
        if (this.currentlyProgress !== 'gainLingLi') {
            // 重置
            this.eventProcessingTime = context.systemTimeObj.gameTime
            this.currentlyProgress = 'gainLingLi'
        }
        const gainLingLi = this.currentSceneObj?.consumeLingLi(this.processingEfficiency(context) * this.gainLingLiSpeed)
        // console.log(`${this.getName()} 获取${gainLingLi}`)
        this.lingLi += gainLingLi
    }

    interruptTheJob() {
        // 打断作业
        this.currentlyProgress = undefined
    }

    executeMove(context: CoreContext) {
        const moveScene = (sceneObjList: SceneObj[]) => {
            const newSceneObj: SceneObj = randomList.randomFormList(sceneObjList)
            if (newSceneObj) {
                if (newSceneObj.id === this.currentSceneObj.id) {
                    // 相同地点不移动
                    return
                }
                this.interruptTheJob()
                // 原来去掉
                if (this.currentSceneObj) {
                    this.currentSceneObj.peopleMoveOut(this)
                }
                newSceneObj.peopleMoveIn(this)
            }
        }
        ProbabilisticActuators.run([
            {
                weight: 30, action: () => {
                    // 当前城市移动(改变节点)
                    moveScene(this.currentCityObj?.sceneObjList)
                }
            },
            {
                weight: 20, action: () => {
                    // 当前世界移动(改变城市)
                    const newCityObj: CityObj = randomList.randomFormList(this.currentWorldObj?.cityObjList)
                    moveScene(newCityObj?.sceneObjList)
                }
            },
            {
                weight: 10, action: () => {
                    // 当前世界移动(改变世界)
                    const newWorldObj: WorldObj = randomList.randomFormList(Array.from(context.worldMap.values()))
                    const newCityObj: CityObj = randomList.randomFormList(newWorldObj?.cityObjList)
                    moveScene(newCityObj?.sceneObjList)
                }
            },
        ])
    }

    doSomething(context: CoreContext) {
        // 基础检查
        this.baseCheck(context)
        if (this.peopleType !== 'AI_PEOPLE') {
            // if (this.peopleType !== '1') {
            return
        }
        ProbabilisticActuators.run([
            {
                weight: 10, action: () => {
                    // 什么都不做(保持现状)
                }
            },
            {
                weight: 10, action: () => {
                    // 移动
                    // 3岁才能移动
                    if (this.age >= 3) {
                        this.executeMove(context)
                    }
                }
            },
            {
                weight: 20, action: () => {
                    // 社交
                    // 4岁才能社交
                    if (this.age >= 4) {
                        this.executePerformSocializing(context)
                    }
                }
            },
            {
                weight: 20, action: () => {
                    // 打工挣钱
                    // 12岁才能打工
                    if (this.age >= 12) {
                        this.executePerformSocializing(context)
                    }
                }
            },
            {
                weight: 10, action: () => {
                    // 休息 todo 生命比率越低 改了越高，最高占比值50
                }
            },
            {
                weight: 20, action: () => {
                    // 吸收灵气
                    this.executeLingLiPower(context)
                }
            },
        ])
    }

    get currentSceneId(): string {
        return this.currentSceneObj?.id || this._currentSceneId;
    }

    get currentCityId(): string {
        return this.currentCityObj?.id || this._currentCityId;
    }

    get currentWorldId(): string {
        return this.currentWorldObj?.id || this._currentWorldId;
    }

    set currentSceneId(value: string) {
        this._currentSceneId = value;
    }

    set currentCityId(value: string) {
        this._currentCityId = value;
    }

    set currentWorldId(value: string) {
        this._currentWorldId = value;
    }

    private isLover(peopleObj: PeopleObj) {
        const relationship = this.relationShipMap.get(peopleObj.id);
        if (relationship) {
            return relationship.relationship === RelationshipType.BOY_FRIEND || relationship.relationship === RelationshipType.GIRL_FRIEND;
        }
        return false;
    }

    private isHusbandAndWife(peopleObj: PeopleObj) {
        const relationship = this.relationShipMap.get(peopleObj.id);
        if (relationship) {
            return relationship.relationship === RelationshipType.WIFE || relationship.relationship === RelationshipType.HUSBAND;
        }
        return false;
    }

    private isParentsAndChildren(peopleObj: PeopleObj) {
        const relationship = this.relationShipMap.get(peopleObj.id);
        if (relationship) {
            return relationship.relationship === RelationshipType.PARENTS || relationship.relationship === RelationshipType.KID;
        }
        return false;
    }

    public static checkIsNextKin(people1: PeopleObj, people2: PeopleObj, generations: number = 3) {
        if (generations === 0) {
            return false
        }
        if (!people1) {
            return false
        }
        if (!people2) {
            return false
        }
        if (people1.id === people2.id) {
            return true
        }
        if (people1.id === people2.mother?.id) {
            return true
        }
        if (people1.id === people2.father?.id) {
            return true
        }
        if (people2.id === people1.mother?.id) {
            return true
        }
        if (people2.id === people1.father?.id) {
            return true
        }
        if (this.checkIsNextKin(people1.father, people2.father, generations - 1)) {
            return true
        }
        if (this.checkIsNextKin(people1.mother, people2.mother, generations - 1)) {
            return true
        }
        return false
    }

    private isNextOfKin(peopleObj: PeopleObj) {
        return PeopleObj.checkIsNextKin(this, peopleObj)
    }

    private baseCheck(context: CoreContext) {
        if (this.isPregnant()) {
            // 怀胎十月
            if (context.systemTimeObj.gameTime - this.timeOfPregnancy > 1000 * 60 * 60 * 24 * 30 * 10) {
                // 生产
                const child = this.pregnant;
                this.pregnant = undefined
                child.birthDay = context.systemTimeObj.gameTime;
                this.changeRelationShipType(child, RelationshipType.KID, true, 300)
                child.father.changeRelationShipType(child, RelationshipType.KID, true, 150)
                context.peopleMap.set(child.id, child)
                this.currentSceneObj.peopleMoveIn(child)
                console.log(`${this.getName()}在${this.currentSceneObj.name}生出一个宝宝：${child.getName()}`)
            } else if (context.systemTimeObj.gameTime - this.timeOfPregnancy > 1000 * 60 * 60 * 24 * 30 * 3) {
                // 3个月后才可能难产
                this.dystociaCheckTimes += 3
                ProbabilisticActuators.run([
                    {
                        weight: this.dystociaCheckTimes, action: () => {
                        },
                    },
                    {
                        weight: 1, action: () => {
                            // 近亲有概率
                            if (this.pregnant.father.isNextOfKin(this.pregnant.mother)) {
                                this.dystocia(500, this, "近亲结婚")
                            } else {
                                this.dystocia(Math.max(this.age - 30, 0), this, "年纪过大")
                            }
                        },
                    },
                ])

            }
        }
    }

    private dystocia(probabilityOfIncrease: number, pregnantPeople: PeopleObj, reason: string) {
        ProbabilisticActuators.run([
            {
                weight: (this.numberOfPregnancies * 5) + probabilityOfIncrease, action: () => {
                    pregnantPeople.pregnant = undefined;
                    console.log(`怀孕次数：${this.numberOfPregnancies},probabilityOfIncrease=${probabilityOfIncrease}。${pregnantPeople.getName()}流产了，因为：${reason}`)
                    // todo 丢失有概率母亲死亡
                },
            },
            {
                weight: 50, action: () => {
                },
            },
        ])
    }
}


export const peopleMap: Map<string, PeopleObj> = new Map()

const res = await people.listALl();
res.forEach((data: any) => {
    const obj = new PeopleObj(data);
    peopleMap.set(obj.id, obj);
})

