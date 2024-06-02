
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_841_battlegroundsImage.png
      */
      export default class GeLeiMaiEnDeYongShiV29_4_2_199503 extends BaseCard {
         name = "格雷迈恩的勇士"
         ethnicity = ["中立"]
         attack = 6
         life = 6
         graded = 6
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你使用偶数等级的牌后，使你的偶数等级的随从获得+2/+2。"
            }
            return "在你使用偶数等级的牌后，使你的偶数等级的随从获得+1/+1。"
         }
    }
      