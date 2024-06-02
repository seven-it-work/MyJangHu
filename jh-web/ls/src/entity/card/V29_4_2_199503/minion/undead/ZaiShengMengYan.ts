
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_055_battlegroundsImage.png
      */
      export default class ZaiShengMengYanV29_4_2_199503 extends BaseCard {
         name = "再生梦魇"
         ethnicity = ["亡灵"]
         attack = 8
         life = 5
         graded = 7
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>使一个不同的友方亡灵获得“<b>亡语：</b>召唤一个金色的再生梦魇”。"
            }
            return "<b>亡语：</b>使一个不同的友方亡灵获得“<b>亡语：</b>召唤一个再生梦魇”。"
         }
    }
      