
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_500_battlegroundsImage.png
      */
      export default class HuPoWeiShiV29_4_2_199503 extends BaseCard {
         name = "琥珀卫士"
         ethnicity = ["龙"]
         attack = 7
         life = 7
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战斗开始时：</b>使两条其他友方的龙获得+7/+7和<b>圣盾</b>。"
            }
            return "<b>战斗开始时：</b>使另一条友方的龙获得+7/+7和<b>圣盾</b>。"
         }
    }
      