
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_698_battlegroundsImage.png
      */
      export default class ChaChaoBaoShiV29_4_2_199503 extends BaseCard {
         name = "查抄宝石"
         
         attack = 0
         life = 0
         graded = 4
         cardType = "tavern"

         

         descriptionStr() {
            return "对一个友方随从使用2张<b>鲜血宝石</b>并使其偷取相邻随从的所有<b>鲜血宝石</b>。"
        }
        
    }
      