
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_021_battlegroundsImage.png
      */
      export default class PengPengFeiCheV29_4_2_199503 extends BaseCard {
         name = "砰砰飞车"
         ethnicity = ["机械"]
         attack = 12
         life = 12
         graded = 7
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>磁力</b> <b>复生</b>。<b>圣盾</b>。<b>嘲讽</b>。<b>风怒</b>"
            }
            return "<b>磁力</b> <b>复生</b>。<b>圣盾</b>。<b>嘲讽</b>。<b>风怒</b>"
         }
    }
      