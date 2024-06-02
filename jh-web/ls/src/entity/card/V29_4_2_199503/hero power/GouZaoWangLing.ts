
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_HERO_100p_battlegroundsImage.png
      */
      export default class GouZaoWangLing extends BaseCard {
         name = "构造亡灵"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "制造一个自定义的亡灵。<i>（还剩 件作品！）</i>"
        }
        
    }
      