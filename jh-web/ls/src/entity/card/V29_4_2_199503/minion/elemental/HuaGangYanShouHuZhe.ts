
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_001_battlegroundsImage.png
      */
      export default class HuaGangYanShouHuZheV29_4_2_199503 extends BaseCard {
         name = "花岗岩守护者"
         ethnicity = ["元素"]
         attack = 1
         life = 28
         graded = 7
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>嘲讽</b>。每当本随从被攻击时，将攻击者的生命值降为1。"
            }
            return "<b>嘲讽</b>。每当本随从被攻击时，将攻击者的生命值降为1。"
         }
    }
