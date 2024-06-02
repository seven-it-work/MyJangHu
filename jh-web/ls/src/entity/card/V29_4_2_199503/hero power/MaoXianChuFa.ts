
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_057_battlegroundsImage.png
      */
      export default class MaoXianChuFa extends BaseCard {
         name = "冒险出发！"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 对战开始时，<b>发现</b>一个英雄技能。"
        }
        
    }
      