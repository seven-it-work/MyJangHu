import BaseCardObj from "../objs/BaseCardObj";
import Player from "../objs/Player";
import ContextObj from "../objs/ContextObj";

export const inversion = (flipFlop: FlipFlop): FlipFlop => {
    return new FlipFlop({
        ...flipFlop,
        currentCard: flipFlop.targetCard,
        currentLocation: flipFlop.targetLocation,
        currentPlayer: flipFlop.targetPlayer,
        targetCard: flipFlop.currentCard,
        targetLocation: flipFlop.currentLocation,
        targetPlayer: flipFlop.currentPlayer
    })

}
export interface FlipFlopInterface {
    currentCard: BaseCardObj;
    currentPlayer: Player;
    currentLocation: '手牌' | '战场' | '战斗' | '酒馆'
    targetCard: BaseCardObj;
    targetPlayer: Player;
    targetLocation: '手牌' | '战场' | '战斗' | '酒馆'
    contextObj: ContextObj;
    otherData?: any;
    // 需要选择对象
    needSelectCard?: BaseCardObj;
}
export class FlipFlop implements FlipFlopInterface{


    isCurrentCardIsTargetCard(): boolean {
        return this.currentCard.id === this.targetCard.id
    }


    constructor(data:any|undefined) {
        this.currentCard=data.currentCard
        this.currentPlayer=data.currentPlayer
        this.currentLocation=data.currentLocation
        this.targetCard=data.targetCard
        this.targetPlayer=data.targetPlayer
        this.targetLocation=data.targetLocation
        this.contextObj=data.contextObj
        this.otherData=data.otherData
        this.needSelectCard=data.needSelectCard
    }
}

export interface Triggering {
    /**
     * 战吼
     */
    warRoar(flipFlop: FlipFlop);
}

export interface FlipFlopFunc {
    /**
     * 当死亡时
     */
    whenDeath(flipFlop: FlipFlop);

    /**
     * 当攻击时
     */
    whenAttacking(flipFlop: FlipFlop);

    /**
     * 当受伤时
     */
    whenInjured(flipFlop: FlipFlop);

    /**
     * 当召唤时
     */
    whenSummoned(flipFlop: FlipFlop);

    /**
     * 当使用时
     */
    whenUsed(flipFlop: FlipFlop);

    /**
     * 当购买时
     */
    whenPurchasing(flipFlop: FlipFlop);

    /**
     * 当被出售时
     */
    whenBeingSold(flipFlop: FlipFlop);
}

