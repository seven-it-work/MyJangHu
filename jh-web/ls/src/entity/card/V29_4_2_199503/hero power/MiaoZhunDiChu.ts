
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_000p_t2_battlegroundsImage.png
      */
      export default class MiaoZhunDiChu extends BaseCard {
         name = "瞄准低处！"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动 战斗开始时：</b>对生命值最低的敌方随从造成 点伤害。<i>（ 回合后翻倍！）</i>"
        }
        
    }
      