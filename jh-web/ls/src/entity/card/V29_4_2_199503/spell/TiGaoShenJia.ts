
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_Treasures_016_battlegroundsImage.png
      */
      export default class TiGaoShenJia extends BaseCard {
         name = "提高身价"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "使一个友方随从变为金色，并将其移回你的手牌。"
        }
        
    }
      