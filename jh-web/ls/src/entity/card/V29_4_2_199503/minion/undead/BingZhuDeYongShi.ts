
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_029_battlegroundsImage.png
      */
      export default class BingZhuDeYongShiV29_4_2_199503 extends BaseCard {
         name = "兵主的勇士"
         ethnicity = ["亡灵"]
         attack = 2
         life = 9
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>复仇（3）：</b>在本局对战中，你的亡灵拥有+2攻击力<i>（无论它们在哪）</i>。"
            }
            return "<b>复仇（3）：</b>在本局对战中，你的亡灵拥有+1攻击力<i>（无论它们在哪）</i>。"
         }
    }
      