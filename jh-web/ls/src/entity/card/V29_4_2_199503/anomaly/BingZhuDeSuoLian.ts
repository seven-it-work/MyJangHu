
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_Anomaly_724_battlegroundsImage.png
      */
      export default class BingZhuDeSuoLianV29_4_2_199503 extends BaseCard {
         name = "兵主的锁链"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "anomaly"

         

         descriptionStr() {
            return "在每场战斗后，移除你的战队。在你的回合开始时，你的铸币变为三倍。"
        }
        
    }
      