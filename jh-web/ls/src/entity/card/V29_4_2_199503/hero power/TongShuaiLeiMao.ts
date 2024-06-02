
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_003p_battlegroundsImage.png
      */
      export default class TongShuaiLeiMao extends BaseCard {
         name = "统率雷矛"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> <b>复仇（2）：</b>使你的随从永久获得+1生命值。"
        }
        
    }
      