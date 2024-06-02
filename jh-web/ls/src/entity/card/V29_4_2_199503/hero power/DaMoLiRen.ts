
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_001_battlegroundsImage.png
      */
      export default class DaMoLiRen extends BaseCard {
         name = "打磨利刃"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "使一个随从获得+ /+ 。在你购买4张牌后升级。<i>（还剩 张！）</i>"
        }
        
    }
      