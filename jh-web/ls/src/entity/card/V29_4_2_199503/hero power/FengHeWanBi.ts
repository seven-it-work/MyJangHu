
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_035_battlegroundsImage.png
      */
      export default class FengHeWanBi extends BaseCard {
         name = "缝合完毕"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 开局时额外拥有30点生命值。"
        }
        
    }
      