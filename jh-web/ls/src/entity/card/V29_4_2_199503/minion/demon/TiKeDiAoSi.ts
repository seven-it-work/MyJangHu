
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_523_battlegroundsImage.png
      */
      export default class TiKeDiAoSiV29_4_2_199503 extends BaseCard {
         name = "提克迪奥斯"
         ethnicity = ["恶魔"]
         attack = 3
         life = 3
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你的英雄受到伤害后，使你的恶魔获得+2/+2。"
            }
            return "在你的英雄受到伤害后，使你的恶魔获得+1/+1。"
         }
    }
      