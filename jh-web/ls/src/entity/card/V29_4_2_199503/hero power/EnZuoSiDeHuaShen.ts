
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_105_battlegroundsImage.png
      */
      export default class EnZuoSiDeHuaShen extends BaseCard {
         name = "恩佐斯的化身"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 开局时拥有一条可以在战斗中获得你的所有<b>亡语</b>效果的2/2的鱼。"
        }
        
    }
      