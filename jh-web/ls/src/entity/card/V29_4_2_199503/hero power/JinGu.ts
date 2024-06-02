
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_068_battlegroundsImage.png
      */
      export default class JinGu extends BaseCard {
         name = "禁锢"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "选择酒馆中的一张牌锁入你的手牌，2回合后解锁。"
        }
        
    }
      