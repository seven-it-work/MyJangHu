
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_063_battlegroundsImage.png
      */
      export default class DongChaWeiLai extends BaseCard {
         name = "洞察未来"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 每回合你第一次<b>刷新</b>酒馆的消耗为（0）枚铸币。"
        }
        
    }
      