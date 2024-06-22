
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_018_battlegroundsImage.png
      */
      export default class LanKeShiZuGuiV29_4_2_199503 extends BaseCard {
         name = "蓝壳始祖龟"
         ethnicity = ["中立"]
         attack = 4
         life = 7
         graded = 5
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "如果你输掉了上一场战斗，出售本随从可以获得10枚铸币。"
            }
            return "如果你输掉了上一场战斗，出售本随从可以获得5枚铸币。"
         }
    }
