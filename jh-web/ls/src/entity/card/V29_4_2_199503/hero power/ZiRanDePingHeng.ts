
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_242p_battlegroundsImage.png
      */
      export default class ZiRanDePingHeng extends BaseCard {
         name = "自然的平衡"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "使每个等级的各一个友方随从获得+2/+1。"
        }
        
    }
      