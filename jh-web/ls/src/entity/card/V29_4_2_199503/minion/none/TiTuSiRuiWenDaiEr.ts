
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_354_battlegroundsImage.png
      */
      export default class TiTuSiRuiWenDaiErV29_4_2_199503 extends BaseCard {
         name = "提图斯·瑞文戴尔"
         ethnicity = ["中立"]
         attack = 1
         life = 7
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "你的<b>亡语</b>额外触发两次。"
            }
            return "你的<b>亡语</b>额外触发一次。"
         }
    }
      