
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_666p_battlegroundsImage.png
      */
      export default class KongJuLingYu extends BaseCard {
         name = "恐惧领域"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 每4个回合，所有敌人均会与恐惧之王及你的战队战斗，争夺战利品。<i>（还剩 回合！）</i>"
        }
        
    }
      