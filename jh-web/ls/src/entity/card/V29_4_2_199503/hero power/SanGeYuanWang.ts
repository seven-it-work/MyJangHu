
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_102_battlegroundsImage.png
      */
      export default class SanGeYuanWang extends BaseCard {
         name = "三个愿望"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "如果你有两个相同的随从，找到第三个。<i>（还剩 个愿望）</i>"
        }
        
    }
      