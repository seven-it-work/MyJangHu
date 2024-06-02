
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_005_battlegroundsImage.png
      */
      export default class JiEDeMoFuV29_4_2_199503 extends BaseCard {
         name = "饥饿的魔蝠"
         ethnicity = ["恶魔"]
         attack = 8
         life = 5
         graded = 6
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你的回合结束时，你的恶魔各吞食酒馆中的一个随从，获得其双倍属性值。"
            }
            return "在你的回合结束时，你的恶魔各吞食酒馆中的一个随从，获得其属性值。"
         }
    }
      