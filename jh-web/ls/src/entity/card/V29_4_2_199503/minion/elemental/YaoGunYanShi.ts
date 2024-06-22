
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_535_battlegroundsImage.png
      */
      export default class YaoGunYanShiV29_4_2_199503 extends BaseCard {
         name = "摇滚岩石"
         ethnicity = ["元素"]
         attack = 5
         life = 5
         graded = 6
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "在你使用一张元素牌后，使你的随从获得+4攻击力。<i>（下回合切换为生命值！）</i> 在你使用一张元素牌后，使你的随从获得+4生命值。<i>（下回合切换为攻击力！）</i>"
            }
            return "在你使用一张元素牌后，使你的随从获得+2攻击力。<i>（下回合切换为生命值！）</i> 在你使用一张元素牌后，使你的随从获得+2生命值。<i>（下回合切换为攻击力！）</i>"
         }
    }
