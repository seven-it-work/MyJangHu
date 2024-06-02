
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG_GVG_085_battlegroundsImage.png
      */
      export default class ChaoChaoJiQiRenV29_4_2_199503 extends BaseCard {
         name = "吵吵机器人"
         ethnicity = ["机械"]
         attack = 1
         life = 2
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>嘲讽</b>
<b>圣盾</b>"
            }
            return "<b>嘲讽</b> <b>圣盾</b>"
         }
    }
      