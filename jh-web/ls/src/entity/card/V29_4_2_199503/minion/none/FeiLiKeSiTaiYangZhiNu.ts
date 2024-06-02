
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_403_battlegroundsImage.png
      */
      export default class FeiLiKeSiTaiYangZhiNuV29_4_2_199503 extends BaseCard {
         name = "菲利克斯，太阳之怒"
         ethnicity = ["中立"]
         attack = 3
         life = 1
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b><b>圣盾</b>。复仇（4）：</b>随机使两个友方随从获得<b><b>圣盾</b>。</b>"
            }
            return "<b><b>圣盾</b>。复仇（4）：</b>随机使一个友方随从获得<b><b>圣盾</b>。</b>"
         }
    }
      