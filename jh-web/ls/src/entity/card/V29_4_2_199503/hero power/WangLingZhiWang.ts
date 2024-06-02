
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_041k_battlegroundsImage.png
      */
      export default class WangLingZhiWang extends BaseCard {
         name = "亡灵之王"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>发现</b>一张亡灵牌。每回合切换类型。"
        }
        
    }
      