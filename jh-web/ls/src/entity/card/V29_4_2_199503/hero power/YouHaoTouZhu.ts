
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_081_battlegroundsImage.png
      */
      export default class YouHaoTouZhu extends BaseCard {
         name = "友好投注"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "猜测下一场战斗中获胜的玩家。如果猜中，获取3张铸币牌。"
        }
        
    }
      