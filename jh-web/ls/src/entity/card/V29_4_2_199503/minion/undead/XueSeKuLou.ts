
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_022_battlegroundsImage.png
      */
      export default class XueSeKuLouV29_4_2_199503 extends BaseCard {
         name = "血色骷髅"
         ethnicity = ["亡灵"]
         attack = 2
         life = 1
         graded = 2
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>复生</b>。<b>亡语：</b>使一个友方亡灵获得+2/+4。"
            }
            return "<b>复生</b>。<b>亡语：</b>使一个友方亡灵获得+1/+2。"
         }
    }
