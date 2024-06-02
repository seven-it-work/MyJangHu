
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_069_battlegroundsImage.png
      */
      export default class ZuoBangYouBi extends BaseCard {
         name = "左膀右臂"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> <b>战斗开始时：</b>你最左边和最右边的随从获得+2/+1并立即发起攻击。"
        }
        
    }
      