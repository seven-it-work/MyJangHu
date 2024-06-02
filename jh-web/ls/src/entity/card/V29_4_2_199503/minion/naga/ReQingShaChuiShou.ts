
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_505_battlegroundsImage.png
      */
      export default class ReQingShaChuiShouV29_4_2_199503 extends BaseCard {
         name = "热情沙锤手"
         ethnicity = ["纳迦"]
         attack = 6
         life = 6
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每回合一次：当<b>塑造法术</b>的法术被用于本随从时，获取它的2张新复制。"
            }
            return "每回合一次：当<b>塑造法术</b>的法术被用于本随从时，获取它的一张新复制。"
         }
    }
      