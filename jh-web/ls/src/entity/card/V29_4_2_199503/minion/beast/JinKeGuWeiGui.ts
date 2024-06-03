
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_803_battlegroundsImage.png
      */
      export default class JinKeGuWeiGuiV29_4_2_199503 extends BaseCard {
         name = "金壳固卫龟"
         ethnicity = ["野兽"]
         attack = 2
         life = 4
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>使你的其他野兽获得+4/+8。"
            }
            return "<b>战吼：</b>使你的其他野兽获得+2/+4。"
         }
    }
