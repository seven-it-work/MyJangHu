
      // 将seven替换为路径
      import BaseCard from "../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_631_Gt_battlegroundsImage.png
      */
      export default class JianShouZhiSi extends BaseCard {
         name = "坚守至死"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "直到下个回合，使你的随从获得+2生命值。其中在下一场战斗中死亡的随从可永久获得此增益！"
        }
        
    }
