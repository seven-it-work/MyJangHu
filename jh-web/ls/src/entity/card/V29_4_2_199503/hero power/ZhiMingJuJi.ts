
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_000p_battlegroundsImage.png
      */
      export default class ZhiMingJuJi extends BaseCard {
         name = "致命狙击"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "瞄准敌人！<b>战斗开始时：</b>对你的目标造成 点伤害。<i>（每 回合翻倍！）</i> 瞄准敌人！<b>战斗开始时：</b>对你的目标造成 点伤害。<i>（ 回合后翻倍！）</i>"
        }
        
    }
      