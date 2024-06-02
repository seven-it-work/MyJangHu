
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_001_battlegroundsImage.png
      */
      export default class FuHuoDeQiBingV29_4_2_199503 extends BaseCard {
         name = "复活的骑兵"
         ethnicity = ["亡灵"]
         attack = 2
         life = 1
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>嘲讽</b>，<b>复生</b>"
            }
            return "<b>嘲讽</b>，<b>复生</b>"
         }
    }
      