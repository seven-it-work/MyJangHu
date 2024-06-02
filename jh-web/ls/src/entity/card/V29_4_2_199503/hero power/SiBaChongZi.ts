
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_087_battlegroundsImage.png
      */
      export default class SiBaChongZi extends BaseCard {
         name = "死吧，虫子！"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在你消灭25个敌方随从后，获得萨弗拉斯。<i>（还剩 个！）</i>"
        }
        
    }
      