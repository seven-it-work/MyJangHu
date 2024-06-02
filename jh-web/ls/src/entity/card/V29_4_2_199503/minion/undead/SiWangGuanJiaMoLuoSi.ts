
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_304_battlegroundsImage.png
      */
      export default class SiWangGuanJiaMoLuoSiV29_4_2_199503 extends BaseCard {
         name = "死亡管家莫罗斯"
         ethnicity = ["亡灵"]
         attack = 4
         life = 2
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b><b>复生</b>。亡语：</b>使你的亡灵获得+4/+8。"
            }
            return "<b><b>复生</b>。亡语：</b>使你的亡灵获得+2/+4。"
         }
    }
      