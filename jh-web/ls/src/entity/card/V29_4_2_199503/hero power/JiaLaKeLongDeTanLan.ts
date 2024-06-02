
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_011_battlegroundsImage.png
      */
      export default class JiaLaKeLongDeTanLan extends BaseCard {
         name = "迦拉克隆的贪婪"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "选择酒馆中的一个随从，<b>发现</b>一个更高等级的随从将其替换。"
        }
        
    }
      