
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_555_battlegroundsImage.png
      */
      export default class JianChangYiLiZhaCiRenV29_4_2_199503 extends BaseCard {
         name = "舰长伊丽扎·刺刃"
         ethnicity = ["海盗"]
         attack = 6
         life = 7
         graded = 6
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当一个友方海盗攻击时，使所有友方随从获得+6/+2。"
            }
            return "每当一个友方海盗攻击时，使所有友方随从获得+3/+1。"
         }
    }
      