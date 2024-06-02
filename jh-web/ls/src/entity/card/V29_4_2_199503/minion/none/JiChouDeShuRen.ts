
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_846_battlegroundsImage.png
      */
      export default class JiChouDeShuRenV29_4_2_199503 extends BaseCard {
         name = "记仇的树人"
         ethnicity = ["中立"]
         attack = 3
         life = 12
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>嘲讽</b>。每当本随从受到伤害，使你的随从永久获得+4攻击力。"
            }
            return "<b>嘲讽</b>。每当本随从受到伤害，使你的随从永久获得+2攻击力。"
         }
    }
      