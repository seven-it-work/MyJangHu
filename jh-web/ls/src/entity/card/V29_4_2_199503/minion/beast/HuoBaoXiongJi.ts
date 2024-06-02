
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_990_battlegroundsImage.png
      */
      export default class HuoBaoXiongJiV29_4_2_199503 extends BaseCard {
         name = "火暴雄鸡"
         ethnicity = ["野兽"]
         attack = 3
         life = 4
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战斗开始时：</b>对相邻随从造成1点伤害并使其获得+4攻击力，触发两次。"
            }
            return "<b>战斗开始时：</b>对相邻随从造成1点伤害并使其获得+4攻击力。"
         }
    }
      