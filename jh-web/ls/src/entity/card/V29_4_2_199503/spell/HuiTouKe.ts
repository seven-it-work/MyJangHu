
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_Treasures_034_battlegroundsImage.png
      */
      export default class HuiTouKe extends BaseCard {
         name = "回头客"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "将一个非金色友方随从移回你的手牌，并使其获得+2/+2。"
        }
        
    }
      