
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_Reward_313_battlegroundsImage.png
      */
      export default class ShenQiDeZhiHuiZhiQiu extends BaseCard {
         name = "神奇的智慧之球"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "baconquestreward"

         

         descriptionStr() {
            return "偶尔来一手有用的<b>刷新</b>。"
        }
        
    }
      