
      // 将seven替换为路径
      import BaseCard from "../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/DMF_004t6_image.png
      */
      export default class RanShaoQuanZhang extends BaseCard {
         name = "燃烧权杖"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "随机施放炎爆术直到一方英雄 死亡。"
        }
        
    }
