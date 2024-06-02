
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_020_battlegroundsImage.png
      */
      export default class ManYuChiHouV29_4_2_199503 extends BaseCard {
         name = "蛮鱼斥候"
         ethnicity = ["鱼人"]
         attack = 3
         life = 2
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            return "<b>战吼：</b>如果你控制其他任何鱼人，则<b>发现</b>一张鱼人牌。"
        }
        
    }
      