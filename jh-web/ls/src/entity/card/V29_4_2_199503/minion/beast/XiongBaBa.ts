
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_509_battlegroundsImage.png
      */
      export default class XiongBaBaV29_4_2_199503 extends BaseCard {
         name = "熊爸爸"
         ethnicity = ["野兽"]
         attack = 12
         life = 12
         graded = 7
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>召唤3个金色的熊妈妈。"
            }
            return "<b>亡语：</b>召唤3个熊妈妈。"
         }
    }
      