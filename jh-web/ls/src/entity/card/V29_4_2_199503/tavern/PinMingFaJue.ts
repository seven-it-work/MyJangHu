
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_571_battlegroundsImage.png
      */
      export default class PinMingFaJueV29_4_2_199503 extends BaseCard {
         name = "拼命发掘"
         
         attack = 0
         life = 0
         graded = 2
         cardType = "tavern"

         

         descriptionStr() {
            return "获得1枚铸币。购买本牌会消耗生命值，而非铸币。"
        }
        
    }
      