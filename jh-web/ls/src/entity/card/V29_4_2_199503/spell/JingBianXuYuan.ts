
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_120t_battlegroundsImage.png
      */
      export default class JingBianXuYuan extends BaseCard {
         name = "井边许愿"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "<b>传递</b>一个非金色随从<i>（井边许愿者除外）</i>。"
        }
        
    }
      