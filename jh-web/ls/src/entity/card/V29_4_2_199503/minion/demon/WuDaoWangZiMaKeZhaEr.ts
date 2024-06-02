
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_524_battlegroundsImage.png
      */
      export default class WuDaoWangZiMaKeZhaErV29_4_2_199503 extends BaseCard {
         name = "舞蹈王子玛克扎尔"
         ethnicity = ["恶魔"]
         attack = 4
         life = 3
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每回合中， 有4次<b>刷新</b>会消耗生命值，而非铸币。<i>（还剩 次！）</i>"
            }
            return "每回合中， 有2次<b>刷新</b>会消耗生命值，而非铸币。<i>（还剩 次！）</i>"
         }
    }
      