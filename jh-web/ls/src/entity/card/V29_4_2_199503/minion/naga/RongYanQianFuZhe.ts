
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_009_battlegroundsImage.png
      */
      export default class RongYanQianFuZheV29_4_2_199503 extends BaseCard {
         name = "熔岩潜伏者"
         ethnicity = ["纳迦"]
         attack = 2
         life = 5
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每回合施放在本随从身上的前两个<b>塑造法术</b>附加效果永久有效。"
            }
            return "每回合施放在本随从身上的第一个<b>塑造法术</b>附加效果永久有效。"
         }
    }
