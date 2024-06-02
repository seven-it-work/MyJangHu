
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_148_battlegroundsImage.png
      */
      export default class BaoFeiFeiTieHuiShouJiV29_4_2_199503 extends BaseCard {
         name = "报废废铁回收机"
         ethnicity = ["机械"]
         attack = 6
         life = 5
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>随机获取2张<b>磁力</b>机械牌。"
            }
            return "<b>亡语：</b>随机获取一张<b>磁力</b>机械牌。"
         }
    }
      