
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_GEM_battlegroundsImage.png
      */
      export default class XianXueBaoShi extends BaseCard {
         name = "鲜血宝石"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "使一个随从获得+ /+ 。"
        }
        
    }
      