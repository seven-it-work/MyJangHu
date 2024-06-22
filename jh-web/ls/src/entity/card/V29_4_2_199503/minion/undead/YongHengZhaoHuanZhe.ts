
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_009_battlegroundsImage.png
      */
      export default class YongHengZhaoHuanZheV29_4_2_199503 extends BaseCard {
         name = "永恒召唤者"
         ethnicity = ["亡灵"]
         attack = 8
         life = 1
         graded = 6
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>复生</b>。<b>亡语：</b>召唤一个金色的永恒骑士。"
            }
            return "<b>复生</b>。<b>亡语：</b>召唤1个永恒骑士。"
         }
    }
