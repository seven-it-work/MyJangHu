
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_010_battlegroundsImage.png
      */
      export default class DuanShouBeiYiWangZheV29_4_2_199503 extends BaseCard {
         name = "断手被遗忘者"
         ethnicity = ["亡灵"]
         attack = 2
         life = 1
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>召唤一只4/2并具有<b>复生</b>的手。"
            }
            return "<b>亡语：</b>召唤一只2/1并具有<b>复生</b>的手。"
         }
    }
      