
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_047_battlegroundsImage.png
      */
      export default class TanXianZheLingDui extends BaseCard {
         name = "探险者领队"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>发现</b>一个你当前等级的随从。每次使用后消耗的铸币增加（1）枚。"
        }
        
    }
      