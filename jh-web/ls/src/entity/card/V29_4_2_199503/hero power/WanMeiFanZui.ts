
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_HERO_305p_battlegroundsImage.png
      */
      export default class WanMeiFanZui extends BaseCard {
         name = "完美犯罪"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "偷取酒馆中的所有牌。每个回合，你的下一个英雄技能消耗的铸币减少（1）枚。"
        }
        
    }
      