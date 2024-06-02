
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_077_battlegroundsImage.png
      */
      export default class BaoBoDeHaoDuo extends BaseCard {
         name = "鲍勃的豪夺"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>刷新</b>酒馆，使其中的随从变为你上一个对手战队随从的原始版复制。"
        }
        
    }
      