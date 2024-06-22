
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_300_battlegroundsImage.png
      */
      export default class WuHaiDeGuLuV29_4_2_199503 extends BaseCard {
         name = "无害的骨颅"
         ethnicity = ["亡灵"]
         attack = 1
         life = 1
         graded = 1
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>召唤两个2/2的骷髅。"
            }
            return "<b>亡语：</b>召唤两个1/1的骷髅。"
         }
    }
