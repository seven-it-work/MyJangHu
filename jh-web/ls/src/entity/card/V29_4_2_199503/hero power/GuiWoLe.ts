
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_053_battlegroundsImage.png
      */
      export default class GuiWoLe extends BaseCard {
         name = "归我了"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "下一场战斗，获取你消灭的第一个随从的一张原始版复制。"
        }
        
    }
      