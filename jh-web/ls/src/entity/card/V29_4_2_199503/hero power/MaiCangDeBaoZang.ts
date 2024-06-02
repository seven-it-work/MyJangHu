
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_074_battlegroundsImage.png
      */
      export default class MaiCangDeBaoZang extends BaseCard {
         name = "埋藏的宝藏"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "挖出一个金色随从！<i>（还要挖 次）</i>"
        }
        
    }
      