
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_061_battlegroundsImage.png
      */
      export default class WanWuJinFen extends BaseCard {
         name = "万物尽焚！"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> <b>战斗开始时：</b>使所有随从永久获得+2攻击力。"
        }
        
    }
      