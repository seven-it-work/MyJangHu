
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_037a_battlegroundsImage.png
      */
      export default class LaYouZhanDui extends BaseCard {
         name = "蜡油战队"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> <b>战斗开始时：</b>使每个不同类型的各一个友方随从获得等同于其等级的属性值。"
        }
        
    }
      