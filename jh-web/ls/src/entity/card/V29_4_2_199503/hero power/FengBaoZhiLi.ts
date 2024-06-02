
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_202p_battlegroundsImage.png
      */
      export default class FengBaoZhiLi extends BaseCard {
         name = "风暴之力"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在每个回合开始时，从两个新英雄技能中选择一个。"
        }
        
    }
      