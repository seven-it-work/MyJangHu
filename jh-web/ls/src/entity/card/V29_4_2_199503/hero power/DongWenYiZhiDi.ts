
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_283p_t3_battlegroundsImage.png
      */
      export default class DongWenYiZhiDi extends BaseCard {
         name = "东瘟疫之地"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 3回合后，<b>发现</b>一个你当前等级的随从。<i>（还剩 回合！）</i>"
        }
        
    }
      