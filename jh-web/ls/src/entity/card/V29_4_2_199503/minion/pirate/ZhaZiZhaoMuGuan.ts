
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_018_battlegroundsImage.png
      */
      export default class ZhaZiZhaoMuGuanV29_4_2_199503 extends BaseCard {
         name = "渣滓招募官"
         ethnicity = ["海盗"]
         attack = 9
         life = 3
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>召唤3个金色的海盗无赖。"
            }
            return "<b>亡语：</b>召唤3个 海盗无赖。"
         }
    }
