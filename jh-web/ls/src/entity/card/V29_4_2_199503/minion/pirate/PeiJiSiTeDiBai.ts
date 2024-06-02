
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_032_battlegroundsImage.png
      */
      export default class PeiJiSiTeDiBaiV29_4_2_199503 extends BaseCard {
         name = "佩吉·斯特迪伯"
         ethnicity = ["海盗"]
         attack = 4
         life = 2
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在一张卡牌被置入你的手牌后，使另一个友方海盗获得+2/+2。"
            }
            return "在一张卡牌被置入你的手牌后，使另一个友方海盗获得+1/+1。"
         }
    }
      