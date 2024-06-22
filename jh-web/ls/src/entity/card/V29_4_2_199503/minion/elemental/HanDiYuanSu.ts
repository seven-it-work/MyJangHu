
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_556_battlegroundsImage.png
      */
      export default class HanDiYuanSuV29_4_2_199503 extends BaseCard {
         name = "旱地元素"
         ethnicity = ["元素","海盗"]
         attack = 5
         life = 7
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在每次<b>刷新</b>后， 酒馆额外提供2张酒馆法术牌。"
            }
            return "在每次<b>刷新</b>后，酒馆额外提供一张酒馆法术牌。"
         }
    }
