
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_001_battlegroundsImage.png
      */
      export default class WoNiuQiBingV29_4_2_199503 extends BaseCard {
         name = "蜗牛骑兵"
         ethnicity = ["纳迦"]
         attack = 5
         life = 2
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每回合一次：当你施放法术时，获得+4生命值。"
            }
            return "每回合一次：当你施放法术时，获得+2生命值。"
         }
    }
