
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_HERO_030p_battlegroundsImage.png
      */
      export default class SiNiDeDeFuZhiQi extends BaseCard {
         name = "斯尼德的复制器"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "使一个随从获得“<b>亡语：</b>随机召唤一个低一级的随从。”"
        }
        
    }
      