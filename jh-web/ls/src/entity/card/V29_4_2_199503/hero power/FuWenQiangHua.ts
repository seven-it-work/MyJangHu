
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_702_battlegroundsImage.png
      */
      export default class FuWenQiangHua extends BaseCard {
         name = "符文强化"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "使一个随从获得+ /+ 。在九个友方随从死亡后升级。<i>（还剩 个！）</i> 使一个随从获得+ /+ 。在九个友方随从死亡后升级。<i>（还剩 个！）</i>"
        }
        
    }
      