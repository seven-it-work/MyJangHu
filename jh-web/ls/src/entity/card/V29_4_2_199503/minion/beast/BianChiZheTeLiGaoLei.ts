
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_807_battlegroundsImage.png
      */
      export default class BianChiZheTeLiGaoLeiV29_4_2_199503 extends BaseCard {
         name = "鞭笞者特里高雷"
         ethnicity = ["野兽"]
         attack = 5
         life = 3
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当另一只友方野兽受到伤害时，永久获得+2/+2。"
            }
            return "每当另一只友方野兽受到伤害时，永久获得+1/+1。"
         }
    }
      