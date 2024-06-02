
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_602_battlegroundsImage.png
      */
      export default class TunYinNianJiangV29_4_2_199503 extends BaseCard {
         name = "吞饮粘浆"
         
         attack = 0
         life = 0
         graded = 4
         cardType = "tavern"

         

         descriptionStr() {
            return "在你的回合结束时，使你的龙获得+4攻击力。持续3回合。"
        }
        
    }
      