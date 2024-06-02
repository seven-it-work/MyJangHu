
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_120_battlegroundsImage.png
      */
      export default class JingBianXuYuanZheV29_4_2_199503 extends BaseCard {
         name = "井边许愿者"
         ethnicity = ["中立"]
         attack = 6
         life = 6
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>塑造法术：</b><b>传递</b>一个不同的非金色随从。"
            }
            return "<b>塑造法术：</b><b>传递</b>一个不同的非金色随从。"
         }
    }
      