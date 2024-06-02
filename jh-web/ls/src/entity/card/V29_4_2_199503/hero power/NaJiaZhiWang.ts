
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_041j_battlegroundsImage.png
      */
      export default class NaJiaZhiWang extends BaseCard {
         name = "纳迦之王"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>发现</b>一张纳迦牌。每回合切换类型。"
        }
        
    }
      