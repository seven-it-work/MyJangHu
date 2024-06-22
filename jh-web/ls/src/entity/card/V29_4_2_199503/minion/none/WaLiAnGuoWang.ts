
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_508_battlegroundsImage.png
      */
      export default class WaLiAnGuoWangV29_4_2_199503 extends BaseCard {
         name = "瓦里安国王"
         ethnicity = ["中立"]
         attack = 9
         life = 9
         graded = 7
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "当你出售本随从时，<b>发现</b>四个等级6 的随从。"
            }
            return "当你出售本随从时，<b>发现</b>两个等级6 的随从。"
         }
    }
