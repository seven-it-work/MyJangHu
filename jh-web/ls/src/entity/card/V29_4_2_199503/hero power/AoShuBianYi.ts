
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_052_battlegroundsImage.png
      */
      export default class AoShuBianYi extends BaseCard {
         name = "奥术变易"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "将一张牌随机替换为一张等级相同的牌。<i>（每回合可使用两次。）</i>"
        }
        
    }
      