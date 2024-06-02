
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_044_battlegroundsImage.png
      */
      export default class GuaJiChengYin extends BaseCard {
         name = "挂机成瘾"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 跳过你的前两个回合，然后<b>发现</b>两个等级3的随从。"
        }
        
    }
      