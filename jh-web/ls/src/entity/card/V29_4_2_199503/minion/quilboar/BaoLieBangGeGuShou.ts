
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_531_battlegroundsImage.png
      */
      export default class BaoLieBangGeGuShouV29_4_2_199503 extends BaseCard {
         name = "爆裂邦戈鼓手"
         ethnicity = ["野猪人"]
         attack = 4
         life = 3
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你的回合结束时，获取4张<b>鲜血宝石</b>，并额外对本随从使用4张。"
            }
            return "在你的回合结束时，获取2张<b>鲜血宝石</b>，并额外对本随从使用2张。"
         }
    }
      