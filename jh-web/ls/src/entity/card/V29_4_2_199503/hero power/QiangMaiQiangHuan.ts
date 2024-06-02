
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_084_battlegroundsImage.png
      */
      export default class QiangMaiQiangHuan extends BaseCard {
         name = "强买强换"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "将一个非金色的友方随从和酒馆中随机一个随从交换。"
        }
        
    }
      