
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_812_battlegroundsImage.png
      */
      export default class ChangPianZouSiFanV29_4_2_199503 extends BaseCard {
         name = "唱片走私犯"
         ethnicity = ["海盗"]
         attack = 6
         life = 6
         graded = 5
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "在你的回合开始时，获得4枚铸币。如果你控制至少三个海盗，再获得4枚。"
            }
            return "在你的回合开始时，获得2枚铸币。如果你控制至少三个海盗，再获得2枚。"
         }
    }
