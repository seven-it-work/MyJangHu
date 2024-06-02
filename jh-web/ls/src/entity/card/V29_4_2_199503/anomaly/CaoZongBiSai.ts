
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_Anomaly_805_battlegroundsImage.png
      */
      export default class CaoZongBiSaiV29_4_2_199503 extends BaseCard {
         name = "操纵比赛"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "anomaly"

         

         descriptionStr() {
            return "猜测在你下一场战斗中获胜的玩家。如果猜中，获取3张铸币牌。"
        }
        
    }
      