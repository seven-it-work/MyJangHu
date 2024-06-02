
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_502t_battlegroundsImage.png
      */
      export default class ShenChenLanTiao extends BaseCard {
         name = "深沉蓝调"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "直到下个回合，使一个随从获得+ /+ 。提升你此后的深沉蓝调效果。"
        }
        
    }
      