
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_309_Gt_battlegroundsImage.png
      */
      export default class RanYi extends BaseCard {
         name = "燃翼"
         ethnicity = ["龙"]
         attack = 4
         life = 2
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            return "<b>战吼：</b>使一条龙获得+10攻击力。"
        }
        
    }
      