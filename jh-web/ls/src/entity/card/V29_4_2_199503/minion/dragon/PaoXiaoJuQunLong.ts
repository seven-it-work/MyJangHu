
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_816_battlegroundsImage.png
      */
      export default class PaoXiaoJuQunLongV29_4_2_199503 extends BaseCard {
         name = "咆哮聚群龙"
         ethnicity = ["龙"]
         attack = 3
         life = 5
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当一条友方的龙攻击时，使其获得+4/+2。"
            }
            return "每当一条友方的龙攻击时，使其获得+2/+1。"
         }
    }
      