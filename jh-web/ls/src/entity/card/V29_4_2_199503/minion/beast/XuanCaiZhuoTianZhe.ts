
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_806_battlegroundsImage.png
      */
      export default class XuanCaiZhuoTianZheV29_4_2_199503 extends BaseCard {
         name = "炫彩灼天者"
         ethnicity = ["野兽"]
         attack = 3
         life = 7
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当一只友方野兽受到伤害时，使该受伤野兽之外的一只友方野兽永久获得+2/+4。"
            }
            return "每当一只友方野兽受到伤害时，使该受伤野兽之外的一只友方野兽永久获得+1/+2。"
         }
    }
      