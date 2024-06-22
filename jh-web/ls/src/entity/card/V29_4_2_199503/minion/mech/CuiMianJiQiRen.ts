
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_146_battlegroundsImage.png
      */
      export default class CuiMianJiQiRenV29_4_2_199503 extends BaseCard {
         name = "催眠机器人"
         ethnicity = ["机械"]
         attack = 2
         life = 2
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>磁力</b>。在你的回合结束时，获得+2/+2。"
            }
            return "<b>磁力</b>。在你的回合结束时，获得+1/+1。"
         }
    }
