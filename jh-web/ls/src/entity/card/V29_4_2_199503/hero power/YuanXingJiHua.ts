
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_201p_battlegroundsImage.png
      */
      export default class YuanXingJiHua extends BaseCard {
         name = "远行计划"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 跳过你的第一个回合。<b>发现</b>等级2，4和6的随从各一个，当你达到对应等级时才可使用。"
        }
        
    }
      