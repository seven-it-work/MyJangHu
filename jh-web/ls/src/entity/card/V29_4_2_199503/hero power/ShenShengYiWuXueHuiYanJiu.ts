
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_HERO_800p_battlegroundsImage.png
      */
      export default class ShenShengYiWuXueHuiYanJiu extends BaseCard {
         name = "神圣遗物学会研究"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 你每购买三张酒馆法术牌，第三张消耗的铸币减少（1）枚。<i>（还剩 张！）</i> <b>被动</b> 你每购买三张酒馆法术牌，第三张消耗的铸币减少（1）枚。<i>（就是这张！）</i>"
        }
        
    }
      