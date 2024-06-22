
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_309_battlegroundsImage.png
      */
      export default class MuNaiYiGongJiangV29_4_2_199503 extends BaseCard {
         name = "木乃伊工匠"
         ethnicity = ["亡灵"]
         attack = 5
         life = 2
         graded = 4
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>使2个不同的友方亡灵获得<b>复生</b>。"
            }
            return "<b>亡语：</b>使一个不同的友方亡灵获得<b>复生</b>。"
         }
    }
