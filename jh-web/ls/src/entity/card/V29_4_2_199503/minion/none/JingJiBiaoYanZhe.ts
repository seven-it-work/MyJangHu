
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_550_battlegroundsImage.png
      */
      export default class JingJiBiaoYanZheV29_4_2_199503 extends BaseCard {
         name = "竞技表演者"
         ethnicity = ["中立"]
         attack = 3
         life = 4
         graded = 5
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b><b>发现</b>2张酒馆法术牌。"
            }
            return "<b>战吼：</b><b>发现</b>一张酒馆法术牌。"
         }
    }
