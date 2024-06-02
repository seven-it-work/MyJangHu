
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_039_battlegroundsImage.png
      */
      export default class MiZhiXia extends BaseCard {
         name = "谜之匣"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "随机偷取酒馆中的一个随从，并使其获得+1/+1。"
        }
        
    }
      