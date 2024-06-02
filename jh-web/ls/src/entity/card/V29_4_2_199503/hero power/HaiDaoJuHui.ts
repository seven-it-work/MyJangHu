
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_072_battlegroundsImage.png
      */
      export default class HaiDaoJuHui extends BaseCard {
         name = "海盗聚会！"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "获取一个海盗。在你购买一个海盗后，你的下一个英雄技能消耗减少（1）枚铸币。"
        }
        
    }
      