
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_305p_battlegroundsImage.png
      */
      export default class ChaoMu extends BaseCard {
         name = "巢母"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> <b>复仇（3）：</b>召唤一条3/1的雏龙，并使其立即发起攻击。"
        }
        
    }
      