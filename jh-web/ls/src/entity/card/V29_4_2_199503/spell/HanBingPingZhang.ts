
      // 将seven替换为路径
      import BaseCard from "../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_Bacon_Secrets_12_battlegroundsImage.png
      */
      export default class HanBingPingZhang extends BaseCard {
         name = "寒冰屏障"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "<b>奥秘：</b>当你的英雄将要承受致命伤害时，防止这些伤害，并使其在本回合中<b>免疫</b>。"
        }
        
    }
