
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_HERO_000p_battlegroundsImage.png
      */
      export default class DingZui extends BaseCard {
         name = "定罪"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "使 个友方随从获得+ /+ 。<i>（在你升级酒馆后，选择一项提升！）</i> 使 个友方随从获得+ /+ 。"
        }
        
    }
      