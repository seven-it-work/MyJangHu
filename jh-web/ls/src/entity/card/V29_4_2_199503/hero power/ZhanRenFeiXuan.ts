
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_280p5_battlegroundsImage.png
      */
      export default class ZhanRenFeiXuan extends BaseCard {
         name = "战刃飞旋"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 每回合一次：在你购买3个随从后，获取所购买的一个随从的一张原始版复制。<i>（还剩 个！）</i> <b>被动</b> 每回合一次：在你购买3个随从后，获取所购买的一个随从的一张原始版复制。<i>（已获取！）</i>"
        }
        
    }
      