
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_HERO_102p_battlegroundsImage.png
      */
      export default class DaDiaoSongGe extends BaseCard {
         name = "大调颂歌"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "使一个随从获得等同于你当前等级的攻击力。<i>（下回合切换为生命值！）</i>"
        }
        
    }
      