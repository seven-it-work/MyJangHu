
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_HERO_303p2_battlegroundsImage.png
      */
      export default class TeYaoZhenTan extends BaseCard {
         name = "特邀侦探"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "检视2个随从。猜中来自你下一个对手的上一场战斗的随从，即可获得一张铸币。"
        }
        
    }
      