
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_000p_t1_battlegroundsImage.png
      */
      export default class MiaoZhunZuoBian extends BaseCard {
         name = "瞄准左边！"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动 战斗开始时：</b>对最左边的敌方随从造成 点伤害。<i>（ 回合后翻倍！）</i>"
        }
        
    }
      