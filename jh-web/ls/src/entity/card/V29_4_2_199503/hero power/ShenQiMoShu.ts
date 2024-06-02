
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_020_battlegroundsImage.png
      */
      export default class ShenQiMoShu extends BaseCard {
         name = "神奇魔术"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "选择一个<b>奥秘</b>。将其置入战场。"
        }
        
    }
      