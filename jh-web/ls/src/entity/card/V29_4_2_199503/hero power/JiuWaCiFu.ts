
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_HERO_801p_battlegroundsImage.png
      */
      export default class JiuWaCiFu extends BaseCard {
         name = "九蛙赐福"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "随机获取一张酒馆法术牌。"
        }
        
    }
      