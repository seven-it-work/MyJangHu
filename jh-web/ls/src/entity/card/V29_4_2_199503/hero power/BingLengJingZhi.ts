
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_014_battlegroundsImage.png
      */
      export default class BingLengJingZhi extends BaseCard {
         name = "冰冷静滞"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>冻结</b>酒馆中的一张牌。<b>被动：</b>在你的回合结束时，被<b>冻结</b>的随从获得+2/+1。"
        }
        
    }
      