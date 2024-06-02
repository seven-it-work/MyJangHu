
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_200p_battlegroundsImage.png
      */
      export default class QiaoDaJiXie extends BaseCard {
         name = "敲打机械"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在10个友方随从死亡后，随机获取一张机械牌。 <b>被动</b> 在10个友方随从死亡后，随机获取一张机械牌。<i>（还剩 个！）</i>"
        }
        
    }
      