
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_879t_battlegroundsImage.png
      */
      export default class JiaQiaoChuJi extends BaseCard {
         name = "甲壳出击"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "选择一个酒馆中的随从，随机使一个友方随从获得选中随从的属性值。"
        }
        
    }
      