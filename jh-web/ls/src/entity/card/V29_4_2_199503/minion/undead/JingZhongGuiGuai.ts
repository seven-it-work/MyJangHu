
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_108_battlegroundsImage.png
      */
      export default class JingZhongGuiGuaiV29_4_2_199503 extends BaseCard {
         name = "镜中鬼怪"
         ethnicity = ["亡灵","鱼人","恶魔","机械","元素","野兽","海盗","龙","野猪人","纳迦"]
         attack = 4
         life = 4
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "当你购买或<b>发现</b>本随从时，获取2张额外复制并<b>传递</b>。"
            }
            return "当你购买或<b>发现</b>本随从时，获取一张额外复制并<b>传递</b>。"
         }
    }
