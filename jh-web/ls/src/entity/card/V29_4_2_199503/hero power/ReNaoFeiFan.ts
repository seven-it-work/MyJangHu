
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_101_battlegroundsImage.png
      */
      export default class ReNaoFeiFan extends BaseCard {
         name = "热闹非凡"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 酒馆中加入了暗月奖券！收集3张，<b>发现</b>一个你当前等级的随从。"
        }
        
    }
      