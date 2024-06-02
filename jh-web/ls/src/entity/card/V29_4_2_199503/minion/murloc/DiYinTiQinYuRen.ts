
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_350_battlegroundsImage.png
      */
      export default class DiYinTiQinYuRenV29_4_2_199503 extends BaseCard {
         name = "低音提琴鱼人"
         ethnicity = ["鱼人"]
         attack = 7
         life = 2
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>召唤你手牌中生命值最高的2个鱼人，其登场仅限本场战斗。"
            }
            return "<b>亡语：</b>召唤你手牌中生命值最高的鱼人，其登场仅限本场战斗。"
         }
    }
      