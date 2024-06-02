
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_022_battlegroundsImage.png
      */
      export default class QiGuiJianXiao extends BaseCard {
         name = "奇诡尖啸"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "触发一个友方随从的<b>战吼</b>。"
        }
        
    }
      