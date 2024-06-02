
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_105t_battlegroundsImage.png
      */
      export default class EnZuoSiDeYu extends BaseCard {
         name = "恩佐斯的鱼"
         ethnicity = ["野兽"]
         attack = 2
         life = 2
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            return "在一个友方<b>亡语</b>随从在战斗中死亡后，获得其<b>亡语</b>。"
        }
        
    }
      