
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_HERO_102p2_battlegroundsImage.png
      */
      export default class XiaoDiaoSongGe extends BaseCard {
         name = "小调颂歌"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "使一个随从获得等同于你当前等级的生命值。<i>（下回合切换为攻击力！）</i>"
        }
        
    }
      