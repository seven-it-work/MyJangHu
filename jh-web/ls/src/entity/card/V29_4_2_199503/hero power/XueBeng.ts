
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_088_battlegroundsImage.png
      */
      export default class XueBeng extends BaseCard {
         name = "雪崩"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在你使用3张元素牌后，升级酒馆所需的铸币减少（3）枚。"
        }
        
    }
      