
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_HERO_104p_battlegroundsImage.png
      */
      export default class XuShiHeSheng extends BaseCard {
         name = "蓄势和声"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 每3个回合，在回合结束时获取你最左边的手牌的一张原始版复制。<i>（还剩 个回合！）</i> <b>被动</b> 每3个回合，在回合结束时获取你最左边的手牌的一张原始版复制。<i>（就是这个回合！）</i>"
        }
        
    }
      