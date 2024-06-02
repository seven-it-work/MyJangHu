
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_HERO_400p_battlegroundsImage.png
      */
      export default class HaoYunDangTou extends BaseCard {
         name = "好运当投"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "投一枚6面骰，获得等量的铸币。<i>（在相应数量的回合内无法再次使用！）</i>"
        }
        
    }
      