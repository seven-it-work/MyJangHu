
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_821_battlegroundsImage.png
      */
      export default class JiaoHuaDeALanNaSiV29_4_2_199503 extends BaseCard {
         name = "狡猾的阿兰纳丝"
         ethnicity = ["恶魔"]
         attack = 3
         life = 10
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当本随从受到伤害，随机对一个敌方随从造成5点伤害，触发两次。"
            }
            return "每当本随从受到伤害，随机对一个敌方随从造成5点伤害。"
         }
    }
      