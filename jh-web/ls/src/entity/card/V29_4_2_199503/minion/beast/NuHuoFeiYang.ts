
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_809_battlegroundsImage.png
      */
      export default class NuHuoFeiYangV29_4_2_199503 extends BaseCard {
         name = "怒火飞羊"
         ethnicity = ["野兽"]
         attack = 8
         life = 8
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当本随从攻击时，对你的其他随从造成1点伤害，触发两次。"
            }
            return "每当本随从攻击时，对你的其他随从造成1点伤害。"
         }
    }
      