
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_280p2_battlegroundsImage.png
      */
      export default class JiQuDongLi extends BaseCard {
         name = "汲取动力"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在一回合内购买4个随从，即可使你手牌和战场上的随从获得+2/+2并强化此被动效果。<i>（还剩 个！）</i>"
        }
        
    }
      