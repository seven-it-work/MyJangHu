
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_871_battlegroundsImage.png
      */
      export default class YiZhongZuanDiChongV29_4_2_199503 extends BaseCard {
         name = "异种钻地虫"
         ethnicity = ["野兽"]
         attack = 3
         life = 1
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>嘲讽</b>。<b>亡语：</b>使你的野兽永久获得+2/+2。"
            }
            return "<b>嘲讽</b>。<b>亡语：</b>使你的野兽永久获得+1/+1。"
         }
    }
