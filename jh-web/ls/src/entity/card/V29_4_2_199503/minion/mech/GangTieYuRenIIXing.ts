
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_991_battlegroundsImage.png
      */
      export default class GangTieYuRenIIXingV29_4_2_199503 extends BaseCard {
         name = "钢铁鱼人II型"
         ethnicity = ["机械","鱼人"]
         attack = 3
         life = 5
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>复仇（4）：</b>使你手牌中和场上的随从永久获得+2/+2。"
            }
            return "<b>复仇（4）：</b>使你手牌中和场上的随从永久获得+1/+1。"
         }
    }
      