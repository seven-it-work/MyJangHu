
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_HERO_000p2_battlegroundsImage.png
      */
      export default class DingZuiDengJi2 extends BaseCard {
         name = "定罪（等级2）"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "随机使四个友方随从获得+ /+ 。<i>（酒馆等级5时升级。）</i>"
        }
        
    }
      