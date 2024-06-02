
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_844_battlegroundsImage.png
      */
      export default class FuYiQiMeiLaV29_4_2_199503 extends BaseCard {
         name = "辅翼奇美拉"
         ethnicity = ["亡灵","鱼人","恶魔","机械","元素","野兽","海盗","龙","野猪人","纳迦"]
         attack = 1
         life = 6
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当本随从受到伤害，使每个类型的各一个友方随从永久获得+2/+2。<i>（每场战斗限两次。）</i>"
            }
            return "每当本随从受到伤害，使每个类型的各一个友方随从永久获得+1/+1。<i>（每场战斗限两次。）</i>"
         }
    }
      