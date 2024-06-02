
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_HERO_104p_battlegroundsImage.png
      */
      export default class GaoXiaoHuHuan extends BaseCard {
         name = "高效互换"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>传递</b>一个非金色随从。"
        }
        
    }
      