
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_HERO_222p_battlegroundsImage.png
      */
      export default class ShuangChongMaFan extends BaseCard {
         name = "双重麻烦"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 每当你使用一张金色随从牌时，你和加尔均会获取三连奖励。<i>（还剩 次！）</i>"
        }
        
    }
      