
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_Anomaly_717_battlegroundsImage.png
      */
      export default class AoDuErDeZhiHuiV29_4_2_199503 extends BaseCard {
         name = "奥杜尔的智慧"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "anomaly"

         

         descriptionStr() {
            return "每3个回合，在回合结束时，将你最右边的随从的属性值变为15/15。<i>（还剩 个回合）</i> 每3个回合，在回合结束时，将你最右边的随从的属性值变为15/15。<i>（就是这个回合！）</i>"
        }
        
    }
      