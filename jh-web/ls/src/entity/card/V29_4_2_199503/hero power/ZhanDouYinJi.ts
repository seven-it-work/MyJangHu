
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_048_battlegroundsImage.png
      */
      export default class ZhanDouYinJi extends BaseCard {
         name = "战斗印记"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在你购买4个<b>战吼</b>随从后，获取一张布莱恩·铜须。<i>（每场对战限一次）</i>"
        }
        
    }
      