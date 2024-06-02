
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_015_battlegroundsImage.png
      */
      export default class XiuBuJiang extends BaseCard {
         name = "修补匠"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 每当你召唤一个机械时，使其获得+2攻击力。"
        }
        
    }
      