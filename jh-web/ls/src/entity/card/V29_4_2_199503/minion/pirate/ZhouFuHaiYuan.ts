
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_903_battlegroundsImage.png
      */
      export default class ZhouFuHaiYuanV29_4_2_199503 extends BaseCard {
         name = "咒缚海员"
         ethnicity = ["海盗"]
         attack = 3
         life = 5
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你购买3张牌后，随机获取2张酒馆法术牌。<i>（还剩 张！）</i>"
            }
            return "在你购买3张牌后，随机获取一张酒馆法术牌。<i>（还剩 张！）</i>"
         }
    }
      