
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_022t_G_battlegroundsImage.png
      */
      export default class ShaDeLing extends BaseCard {
         name = "沙德灵"
         ethnicity = ["中立"]
         attack = 2
         life = 2
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            return "<b>战吼：</b>重复在本局对战中你所使用过的所有其他卡牌的<b>战吼</b>效果，触发两次<i>（目标随机而定）</i>。"
        }
        
    }
      