
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_514t_battlegroundsImage.png
      */
      export default class HaiYaoZhiGe extends BaseCard {
         name = "海妖之歌"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "选择酒馆中的一个随从<i>（海巫扎尔吉拉除外）</i>，获取一张复制。"
        }
        
    }
      