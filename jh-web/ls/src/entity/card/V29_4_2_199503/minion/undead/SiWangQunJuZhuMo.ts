
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_011_battlegroundsImage.png
      */
      export default class SiWangQunJuZhuMoV29_4_2_199503 extends BaseCard {
         name = "死亡群居蛛魔"
         ethnicity = ["亡灵"]
         attack = 1
         life = 4
         graded = 2
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>在本局对战中，你的亡灵拥有+2攻击力<i>（无论它们在哪）</i>。"
            }
            return "<b>战吼：</b>在本局对战中，你的亡灵拥有+1攻击力<i>（无论它们在哪）</i>。"
         }
    }
