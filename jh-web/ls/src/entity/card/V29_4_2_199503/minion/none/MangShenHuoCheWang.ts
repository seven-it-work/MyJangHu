
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_318_battlegroundsImage.png
      */
      export default class MangShenHuoCheWangV29_4_2_199503 extends BaseCard {
         name = "莽神火车王"
         ethnicity = ["中立"]
         attack = 6
         life = 2
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>消灭击杀本随从的随从。"
            }
            return "<b>亡语：</b>消灭击杀本随从的随从。"
         }
    }
      