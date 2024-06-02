
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_590_battlegroundsImage.png
      */
      export default class RouXinHaiYaoV29_4_2_199503 extends BaseCard {
         name = "柔心海妖"
         ethnicity = ["纳迦"]
         attack = 3
         life = 6
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当本随从受到伤害，随机获取两张<b>塑造法术</b>的法术牌。<i>（每场战斗限3次。）</i> 每当本随从受到伤害，随机获取两张<b>塑造法术</b>的法术牌。<i>（还剩 次！）</i>"
            }
            return "每当本随从受到伤害，随机获取一张<b>塑造法术</b>的法术牌。<i>（每场战斗限3次。）</i> 每当本随从受到伤害，随机获取一张<b>塑造法术</b>的法术牌。<i>（还剩 次！）</i>"
         }
    }
      