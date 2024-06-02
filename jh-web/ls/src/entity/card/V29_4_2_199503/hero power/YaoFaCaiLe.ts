
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_046_battlegroundsImage.png
      */
      export default class YaoFaCaiLe extends BaseCard {
         name = "要发财了！"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "使一个友方随从变为金色。<i>（每场对战限一次。）</i>"
        }
        
    }
      