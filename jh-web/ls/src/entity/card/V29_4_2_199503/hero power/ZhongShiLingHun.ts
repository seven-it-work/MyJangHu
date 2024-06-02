
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_HERO_306p_battlegroundsImage.png
      */
      export default class ZhongShiLingHun extends BaseCard {
         name = "重拾灵魂"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "使你在上一场战斗中死亡的随从获得+2/+1。"
        }
        
    }
      