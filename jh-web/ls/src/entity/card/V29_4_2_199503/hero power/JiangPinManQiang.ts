
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_106_battlegroundsImage.png
      */
      export default class JiangPinManQiang extends BaseCard {
         name = "奖品满墙"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 每四个回合，<b>发现</b>一个暗月奖品。<i>（还剩 回合！）</i>"
        }
        
    }
      