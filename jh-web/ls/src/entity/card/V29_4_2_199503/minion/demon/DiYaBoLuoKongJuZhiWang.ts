
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_666p_t0_battlegroundsImage.png
      */
      export default class DiYaBoLuoKongJuZhiWang extends BaseCard {
         name = "迪亚波罗，恐惧之王"
         ethnicity = ["恶魔"]
         attack = 4
         life = 4
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            return "<b>亡语：</b>使你的对手获得2件战利品！<i>（如果该角色幸存，则改为迪亚波罗获得2件战利品。）</i>"
        }
        
    }
      