
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_817_battlegroundsImage.png
      */
      export default class DaoJianShouCangJiaV29_4_2_199503 extends BaseCard {
         name = "刀剑收藏家"
         ethnicity = ["海盗"]
         attack = 3
         life = 2
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "同时对其攻击目标相邻的随从造成伤害。"
            }
            return "同时对其攻击目标相邻的随从造成伤害。"
         }
    }
      