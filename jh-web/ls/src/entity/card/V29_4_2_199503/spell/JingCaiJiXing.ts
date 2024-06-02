
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_501t_battlegroundsImage.png
      */
      export default class JingCaiJiXing extends BaseCard {
         name = "精彩即兴"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "直到下个回合，使一个随从获得等同于你当前等级的属性值。"
        }
        
    }
      