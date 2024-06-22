
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_815_battlegroundsImage.png
      */
      export default class KaiGuaHeGuanV29_4_2_199503 extends BaseCard {
         name = "开挂荷官"
         ethnicity = ["海盗"]
         attack = 6
         life = 6
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你获得铸币后，获得+2/+2。"
            }
            return "在你获得铸币后，获得+1/+1。"
         }
    }
