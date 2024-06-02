
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_103_battlegroundsImage.png
      */
      export default class XuanXieNuHuo extends BaseCard {
         name = "宣泄怒火"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>战斗开始时：</b>召唤并获取一个你当前等级的随机随从。"
        }
        
    }
      