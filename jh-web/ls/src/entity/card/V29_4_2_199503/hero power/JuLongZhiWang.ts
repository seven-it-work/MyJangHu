
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_041f_battlegroundsImage.png
      */
      export default class JuLongZhiWang extends BaseCard {
         name = "巨龙之王"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>发现</b>一张龙牌。每回合切换类型。"
        }
        
    }
      