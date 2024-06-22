
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_514_battlegroundsImage.png
      */
      export default class HaiWuZhaErJiLaV29_4_2_199503 extends BaseCard {
         name = "海巫扎尔吉拉"
         ethnicity = ["纳迦"]
         attack = 4
         life = 5
         graded = 7
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>塑造法术：</b>选择酒馆中一个不同的随从，获取2张复制。"
            }
            return "<b>塑造法术：</b>选择酒馆中一个不同的随从，获取一张复制。"
         }
    }
