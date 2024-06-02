
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_707_battlegroundsImage.png
      */
      export default class HuoHuaAiZeLiTeV29_4_2_199503 extends BaseCard {
         name = "活化艾泽里特"
         ethnicity = ["元素"]
         attack = 3
         life = 3
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当你施放一个酒馆法术时，在本局对战中酒馆中的元素拥有+2/+2。"
            }
            return "每当你施放一个酒馆法术时，在本局对战中酒馆中的元素拥有+1/+1。"
         }
    }
      