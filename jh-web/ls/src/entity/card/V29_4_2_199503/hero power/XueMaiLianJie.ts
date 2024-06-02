
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_103p_battlegroundsImage.png
      */
      export default class XueMaiLianJie extends BaseCard {
         name = "血脉连接"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "获取2张<b>鲜血宝石</b>。<i>（每回合两次。）</i>"
        }
        
    }
      