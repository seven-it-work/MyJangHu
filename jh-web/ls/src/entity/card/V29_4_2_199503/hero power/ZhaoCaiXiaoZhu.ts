
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_076_battlegroundsImage.png
      */
      export default class ZhaoCaiXiaoZhu extends BaseCard {
         name = "招财小猪"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "获得 枚铸币。每回合都会提高。<i>（每场对战限一次。）</i>"
        }
        
    }
      