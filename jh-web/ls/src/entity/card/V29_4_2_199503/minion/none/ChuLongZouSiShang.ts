
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_013_battlegroundsImage.png
      */
      export default class ChuLongZouSiShangV29_4_2_199503 extends BaseCard {
         name = "雏龙走私商"
         ethnicity = ["中立"]
         attack = 2
         life = 3
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在一条友方的龙获得攻击力后，使其获得+2生命值。"
            }
            return "在一条友方的龙获得攻击力后，使其获得+1生命值。"
         }
    }
      