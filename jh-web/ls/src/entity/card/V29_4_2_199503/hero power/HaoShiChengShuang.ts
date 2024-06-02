
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_004p_battlegroundsImage.png
      */
      export default class HaoShiChengShuang extends BaseCard {
         name = "好事成霜"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在酒馆被<b>刷新</b>后，复制等级最高的随从并<b>冻结</b>这两个随从。"
        }
        
    }
      