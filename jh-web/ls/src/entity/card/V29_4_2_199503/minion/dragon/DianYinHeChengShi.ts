
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_963_battlegroundsImage.png
      */
      export default class DianYinHeChengShiV29_4_2_199503 extends BaseCard {
         name = "电音合成师"
         ethnicity = ["龙"]
         attack = 3
         life = 3
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>使你的其他龙获得+6/+2。"
            }
            return "<b>战吼：</b>使你的其他龙获得+3/+1。"
         }
    }
      