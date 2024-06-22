
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_110_battlegroundsImage.png
      */
      export default class HuoPoDeDanShuiYuanSuV29_4_2_199503 extends BaseCard {
         name = "活泼的淡水元素"
         ethnicity = ["元素"]
         attack = 6
         life = 4
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>你和你的队友各获得四次消耗为（0）的<b>刷新</b>。"
            }
            return "<b>亡语：</b>你和你的队友各获得两次消耗为（0）的<b>刷新</b>。"
         }
    }
