
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_005_battlegroundsImage.png
      */
      export default class ShiKongChuanChangGouWeiV29_4_2_199503 extends BaseCard {
         name = "时空船长钩尾"
         ethnicity = ["海盗","龙"]
         attack = 1
         life = 4
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当你施放一个酒馆法术，使你的随从获得+2攻击力。"
            }
            return "每当你施放一个酒馆法术，使你的随从获得+1攻击力。"
         }
    }
      