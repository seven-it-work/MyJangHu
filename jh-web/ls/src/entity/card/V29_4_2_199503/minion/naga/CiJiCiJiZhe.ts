
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_024_battlegroundsImage.png
      */
      export default class CiJiCiJiZheV29_4_2_199503 extends BaseCard {
         name = "刺脊刺击者"
         ethnicity = ["纳迦"]
         attack = 4
         life = 8
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当你施放一个法术，从<b>圣盾</b>，<b>风怒</b>或<b>烈毒</b>中获得一种。"
            }
            return "每当你施放一个法术，直到下回合，从<b>圣盾</b>，<b>风怒</b>或<b>烈毒</b>中获得一种。"
         }
    }
