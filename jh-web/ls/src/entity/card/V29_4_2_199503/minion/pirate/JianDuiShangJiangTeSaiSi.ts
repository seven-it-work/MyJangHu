
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_766_battlegroundsImage.png
      */
      export default class JianDuiShangJiangTeSaiSiV29_4_2_199503 extends BaseCard {
         name = "舰队上将特塞斯"
         ethnicity = ["海盗"]
         attack = 5
         life = 6
         graded = 6
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你花掉9枚铸币后，随机获取2张海盗牌。<i>（还剩 枚！）</i>"
            }
            return "在你花掉9枚铸币后，随机获取一张海盗牌。<i>（还剩 枚！）</i>"
         }
    }
