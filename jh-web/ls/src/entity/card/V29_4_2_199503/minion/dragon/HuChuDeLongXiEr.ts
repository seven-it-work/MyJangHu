
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_107_battlegroundsImage.png
      */
      export default class HuChuDeLongXiErV29_4_2_199503 extends BaseCard {
         name = "护雏的龙希尔"
         ethnicity = ["龙"]
         attack = 4
         life = 3
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你的回合结束时，使你的队友的随从获得+2攻击力。"
            }
            return "在你的回合结束时，使你的队友的随从获得+1攻击力。"
         }
    }
      