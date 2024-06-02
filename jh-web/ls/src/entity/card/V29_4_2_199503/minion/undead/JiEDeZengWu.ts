
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_014_battlegroundsImage.png
      */
      export default class JiEDeZengWuV29_4_2_199503 extends BaseCard {
         name = "饥饿的憎恶"
         ethnicity = ["亡灵"]
         attack = 4
         life = 5
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>复仇（1)：</b>永久获得+2/+4。"
            }
            return "<b>复仇（1)：</b>永久获得+1/+2。"
         }
    }
      