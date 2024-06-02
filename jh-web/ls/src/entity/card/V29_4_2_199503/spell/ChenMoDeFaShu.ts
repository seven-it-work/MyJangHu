
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_405t_battlegroundsImage.png
      */
      export default class ChenMoDeFaShu extends BaseCard {
         name = "沉没的法术"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "<b>发现</b>一张酒馆法术牌。"
        }
        
    }
      