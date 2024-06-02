
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_028_battlegroundsImage.png
      */
      export default class ShiKongJiuGuan extends BaseCard {
         name = "时空酒馆"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>刷新</b>酒馆，其中包含两个比当前酒馆等级高一级的随从。"
        }
        
    }
      