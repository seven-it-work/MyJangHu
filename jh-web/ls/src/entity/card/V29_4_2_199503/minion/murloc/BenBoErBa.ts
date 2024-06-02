
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_012_battlegroundsImage.png
      */
      export default class BenBoErBaV29_4_2_199503 extends BaseCard {
         name = "奔波尔霸"
         ethnicity = ["鱼人"]
         attack = 4
         life = 4
         graded = 6
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>你每控制一个鱼人，使一个友方鱼人获得+8/+8。"
            }
            return "<b>战吼：</b>你每控制一个鱼人，使一个友方鱼人获得+4/+4。"
         }
    }
      