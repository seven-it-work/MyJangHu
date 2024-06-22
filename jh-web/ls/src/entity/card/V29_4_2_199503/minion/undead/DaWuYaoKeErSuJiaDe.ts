
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_308_battlegroundsImage.png
      */
      export default class DaWuYaoKeErSuJiaDeV29_4_2_199503 extends BaseCard {
         name = "大巫妖克尔苏加德"
         ethnicity = ["亡灵"]
         attack = 10
         life = 8
         graded = 6
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你的回合结束时，消灭相邻的亡灵并再次召唤完全相同的复制。"
            }
            return "在你的回合结束时，消灭本随从左侧的亡灵并再次召唤完全相同的复制。"
         }
    }
