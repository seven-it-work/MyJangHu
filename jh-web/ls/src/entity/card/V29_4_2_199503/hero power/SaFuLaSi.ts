
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_087t_battlegroundsImage.png
      */
      export default class SaFuLaSi extends BaseCard {
         name = "萨弗拉斯"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在你的回合结束时，使你最左边和最右边的随从获得+3/+3。"
        }
        
    }
      