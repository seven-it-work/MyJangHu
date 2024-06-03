
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_202_battlegroundsImage.png
      */
      export default class TaDeV29_4_2_199503 extends BaseCard {
         name = "塔德"
         ethnicity = ["鱼人"]
         attack = 2
         life = 2
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "当你出售本随从时，随机获取2张鱼人牌。"
            }
            return "当你出售本随从时，随机获取一张鱼人牌。"
         }
    }
