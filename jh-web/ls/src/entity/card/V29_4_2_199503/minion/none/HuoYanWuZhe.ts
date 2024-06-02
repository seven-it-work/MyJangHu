
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_843_battlegroundsImage.png
      */
      export default class HuoYanWuZheV29_4_2_199503 extends BaseCard {
         name = "火焰舞者"
         ethnicity = ["中立"]
         attack = 6
         life = 3
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>对所有 随从造成1点伤害，触发两次。"
            }
            return "<b>亡语：</b>对所有随从造成1点伤害。"
         }
    }
      