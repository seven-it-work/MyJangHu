
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_HERO_100p_battlegroundsImage.png
      */
      export default class XuanAnYiYun extends BaseCard {
         name = "悬案疑云"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 对战开始时，从两个<b>任务</b>中选择一个。"
        }
        
    }
      