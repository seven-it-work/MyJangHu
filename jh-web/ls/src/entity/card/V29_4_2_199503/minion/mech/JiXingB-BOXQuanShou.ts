
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_149_battlegroundsImage.png
      */
      export default class JiXingB-BOXQuanShouV29_4_2_199503 extends BaseCard {
         name = "极性B-Box拳手"
         ethnicity = ["机械"]
         attack = 5
         life = 10
         graded = 6
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当你对另一个随从施加<b>磁力</b>时，还会对本随从施加<b>磁力</b>两次。"
            }
            return "每当你对另一个随从施加<b>磁力</b>时，还会对本随从施加<b>磁力</b>。"
         }
    }
