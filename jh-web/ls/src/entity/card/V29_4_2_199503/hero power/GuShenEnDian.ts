
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_104_battlegroundsImage.png
      */
      export default class GuShenEnDian extends BaseCard {
         name = "古神恩典"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "在回合结束时，使一个友方随从获得+1/+1。重复 次。<i>（每回合都会升级！）</i>"
        }
        
    }
      