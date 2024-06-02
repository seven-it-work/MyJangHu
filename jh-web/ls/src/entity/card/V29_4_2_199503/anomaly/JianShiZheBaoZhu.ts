
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_Anomaly_718_battlegroundsImage.png
      */
      export default class JianShiZheBaoZhuV29_4_2_199503 extends BaseCard {
         name = "监视者宝珠"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "anomaly"

         

         descriptionStr() {
            return "在你升级酒馆后，<b>刷新</b>酒馆，使其中的随从变为你的多数随从的类型的随从。"
        }
        
    }
      