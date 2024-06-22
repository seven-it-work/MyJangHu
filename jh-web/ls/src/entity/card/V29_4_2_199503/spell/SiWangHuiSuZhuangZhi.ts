
      // 将seven替换为路径
      import BaseCard from "../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_Reward_715t4_battlegroundsImage.png
      */
      export default class SiWangHuiSuZhuangZhi extends BaseCard {
         name = "死亡回溯装置"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "使一个随从获得+5/+5和<b>复生</b>。"
        }
        
    }
