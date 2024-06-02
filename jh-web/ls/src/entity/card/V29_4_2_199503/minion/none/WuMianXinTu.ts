
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_719_battlegroundsImage.png
      */
      export default class WuMianXinTuV29_4_2_199503 extends BaseCard {
         name = "无面信徒"
         ethnicity = ["中立"]
         attack = 6
         life = 4
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>将一个随从变形成为高2级的随从。"
            }
            return "<b>战吼：</b>将一个随从变形成为高一级的随从。"
         }
    }
      