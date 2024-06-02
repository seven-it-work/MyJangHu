
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_HERO_801p2_battlegroundsImage.png
      */
      export default class TiaoXuanYongShi extends BaseCard {
         name = "挑选勇士"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 对战开始时，<b>发现</b>一个等级7的随从，在你花费65枚铸币后才可使用。<i>（还剩 枚！）</i> <b>被动</b> 对战开始时，<b>发现</b>一个等级7的随从，在你花费65枚铸币后才可使用。<i>（已完成！）</i>"
        }
        
    }
      