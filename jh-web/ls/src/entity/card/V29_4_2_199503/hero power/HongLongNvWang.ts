
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_064_battlegroundsImage.png
      */
      export default class HongLongNvWang extends BaseCard {
         name = "红龙女王"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在你将酒馆升至5级后，<b>发现</b>两条任意等级的龙。"
        }
        
    }
      