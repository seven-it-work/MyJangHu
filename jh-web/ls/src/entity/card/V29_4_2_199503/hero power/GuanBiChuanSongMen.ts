
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_280p3_battlegroundsImage.png
      */
      export default class GuanBiChuanSongMen extends BaseCard {
         name = "关闭传送门"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在一回合内购买5个随从，即可使你在本局对战中的所有随从获得+2/+2并完成此被动效果。<i>（还剩 个！）</i>"
        }
        
    }
      