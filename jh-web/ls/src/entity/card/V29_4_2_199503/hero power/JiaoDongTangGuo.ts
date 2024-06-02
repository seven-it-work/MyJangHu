
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_HERO_020p_battlegroundsImage.png
      */
      export default class JiaoDongTangGuo extends BaseCard {
         name = "搅动汤锅"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "将一个随从投入你的锅中。当你集齐3个随从时，从它们的类型中<b>发现</b>一个随从。<i>（还剩 个！）</i>"
        }
        
    }
      