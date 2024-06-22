
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_405_battlegroundsImage.png
      */
      export default class FuChouZheXiLiWaZiV29_4_2_199503 extends BaseCard {
         name = "复仇者希里瓦兹"
         ethnicity = ["纳迦"]
         attack = 5
         life = 8
         graded = 6
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>塑造法术：发现</b>2张酒馆法术牌。"
            }
            return "<b>塑造法术：发现</b>一张酒馆法术牌。"
         }
    }
