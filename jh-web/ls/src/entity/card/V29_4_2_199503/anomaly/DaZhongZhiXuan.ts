
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_Anomaly_580_battlegroundsImage.png
      */
      export default class DaZhongZhiXuanV29_4_2_199503 extends BaseCard {
         name = "大众之选"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "anomaly"

         

         descriptionStr() {
            return "在每个回合开始时，由一个玩家选择一张牌，回合结束时所有玩家都会获取这张牌。"
        }
        
    }
      