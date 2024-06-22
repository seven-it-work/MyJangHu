
      // 将seven替换为路径
      import BaseCard from "../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/EX1_014t_image.png
      */
      export default class XiangJiao extends BaseCard {
         name = "香蕉"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "使一个随从获得+1/+1。"
        }
        
    }
