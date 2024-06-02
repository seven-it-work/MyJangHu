
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_008_battlegroundsImage.png
      */
      export default class LiCaiZhiDao extends BaseCard {
         name = "理财之道"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在你出售一个随从后，下回合获得1枚铸币。"
        }
        
    }
      