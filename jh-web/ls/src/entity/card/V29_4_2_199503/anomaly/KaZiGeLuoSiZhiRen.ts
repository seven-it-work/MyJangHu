
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_Anomaly_830_battlegroundsImage.png
      */
      export default class KaZiGeLuoSiZhiRenV29_4_2_199503 extends BaseCard {
         name = "卡兹格罗斯之韧"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "anomaly"

         

         descriptionStr() {
            return "在你的回合结束时，将你最左边和最右边的随从的生命值均变为两者中的高值。"
        }
        
    }
      