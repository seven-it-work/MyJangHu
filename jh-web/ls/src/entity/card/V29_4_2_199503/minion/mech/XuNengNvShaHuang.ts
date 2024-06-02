
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_741_battlegroundsImage.png
      */
      export default class XuNengNvShaHuangV29_4_2_199503 extends BaseCard {
         name = "蓄能女沙皇"
         ethnicity = ["机械"]
         attack = 5
         life = 3
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>圣盾</b>。每当你施放一个酒馆法术时，使你具有<b>圣盾</b>的随从获得+4攻击力。"
            }
            return "<b>圣盾</b>。每当你施放一个酒馆法术时，使你具有<b>圣盾</b>的随从获得+2攻击力。"
         }
    }
      