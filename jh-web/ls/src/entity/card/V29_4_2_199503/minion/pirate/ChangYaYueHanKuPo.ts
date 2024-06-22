
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_831_battlegroundsImage.png
      */
      export default class ChangYaYueHanKuPoV29_4_2_199503 extends BaseCard {
         name = "长牙约翰·库珀"
         ethnicity = ["海盗"]
         attack = 4
         life = 6
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当本随从受到伤害，获取两张铸币牌。<i>（每场战斗限3次。）</i> 每当本随从受到伤害，获取两张铸币牌。<i>（还剩 次！）</i>"
            }
            return "每当本随从受到伤害，获取一张铸币牌。<i>（每场战斗限3次。）</i> 每当本随从受到伤害，获取一张铸币牌。<i>（还剩 次！）</i>"
         }
    }
