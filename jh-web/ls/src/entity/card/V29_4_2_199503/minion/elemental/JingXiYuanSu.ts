
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_175_battlegroundsImage.png
      */
      export default class JingXiYuanSuV29_4_2_199503 extends BaseCard {
         name = "惊喜元素"
         ethnicity = ["元素"]
         attack = 8
         life = 8
         graded = 6
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>圣盾</b>。可以与任意元素三连。"
            }
            return "<b>圣盾</b>。可以与任意元素三连。"
         }
    }
      