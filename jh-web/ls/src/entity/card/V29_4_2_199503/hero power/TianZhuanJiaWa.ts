
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_040_battlegroundsImage.png
      */
      export default class TianZhuanJiaWa extends BaseCard {
         name = "添砖加瓦"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "使一个随从获得+ 生命值。<i>（每回合中如果你未使用技能，获得+1生命值！）</i>"
        }
        
    }
      