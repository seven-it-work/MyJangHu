
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_033_battlegroundsImage.png
      */
      export default class GuanChangQiZhen extends BaseCard {
         name = "馆长奇珍"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 开局时拥有一个具有<b>烈毒</b>和全部随从类型的2/2的融合怪。"
        }
        
    }
      