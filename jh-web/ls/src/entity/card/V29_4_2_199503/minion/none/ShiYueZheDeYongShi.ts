
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_840_battlegroundsImage.png
      */
      export default class ShiYueZheDeYongShiV29_4_2_199503 extends BaseCard {
         name = "噬月者的勇士"
         ethnicity = ["中立"]
         attack = 5
         life = 5
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你使用奇数等级的牌后，使你的奇数等级的随从获得+2/+2。"
            }
            return "在你使用奇数等级的牌后，使你的奇数等级的随从获得+1/+1。"
         }
    }
