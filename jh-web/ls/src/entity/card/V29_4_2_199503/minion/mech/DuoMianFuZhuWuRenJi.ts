
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_152_battlegroundsImage.png
      */
      export default class DuoMianFuZhuWuRenJiV29_4_2_199503 extends BaseCard {
         name = "多面辅助无人机"
         ethnicity = ["机械"]
         attack = 4
         life = 4
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你的回合结束时，你的随从每拥有一个<b>磁力</b>效果，使其获得+4/+2。"
            }
            return "在你的回合结束时，你的随从每拥有一个<b>磁力</b>效果，使其获得+2/+1。"
         }
    }
      