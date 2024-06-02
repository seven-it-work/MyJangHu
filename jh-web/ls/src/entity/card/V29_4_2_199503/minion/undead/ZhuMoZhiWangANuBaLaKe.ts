
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_007_battlegroundsImage.png
      */
      export default class ZhuMoZhiWangANuBaLaKeV29_4_2_199503 extends BaseCard {
         name = "蛛魔之王阿努巴拉克"
         ethnicity = ["亡灵"]
         attack = 4
         life = 3
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>在本局对战中，你的亡灵拥有+2攻击力<i>（无论它们在哪）</i>。"
            }
            return "<b>亡语：</b>在本局对战中，你的亡灵拥有+1攻击力<i>（无论它们在哪）</i>。"
         }
    }
      