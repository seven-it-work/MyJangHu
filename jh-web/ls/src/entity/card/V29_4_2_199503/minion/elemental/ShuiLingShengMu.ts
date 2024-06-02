
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_610_battlegroundsImage.png
      */
      export default class ShuiLingShengMuV29_4_2_199503 extends BaseCard {
         name = "水灵圣母"
         ethnicity = ["元素"]
         attack = 3
         life = 9
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当本随从受到伤害，随机获取两张酒馆法术牌。<i>（每场战斗限3次。）</i> 每当本随从受到伤害，随机获取两张酒馆法术牌。<i>（还剩 次！）</i>"
            }
            return "每当本随从受到伤害，随机获取一张酒馆法术牌。<i>（每场战斗限3次。）</i> 每当本随从受到伤害，随机获取一张酒馆法术牌。<i>（还剩 次！）</i>"
         }
    }
      