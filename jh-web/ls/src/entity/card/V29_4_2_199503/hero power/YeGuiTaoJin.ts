
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_049_battlegroundsImage.png
      */
      export default class YeGuiTaoJin extends BaseCard {
         name = "夜鬼淘金"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "偷取酒馆中的一张牌。受到等同于其等级的伤害。"
        }
        
    }
      