<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import XiaoGuiQiuTu from "./entity/card/XiaoGuiQiuTu";
import Player from "./objs/Player";
import Taverns from "./objs/Taverns";
import BaseCardObj from "./objs/BaseCardObj";
import SharedCardPool from "./objs/SharedCardPool";
import ContextObj from "./objs/ContextObj";
import Fight from "./objs/Fight";

var xiaoGuiQiuTu = new XiaoGuiQiuTu();
var player = new Player(new Taverns());
player.cardList.push(new BaseCardObj(xiaoGuiQiuTu))
var sharedCardPool = new SharedCardPool(["恶魔"]);
var attackerContextObj = new ContextObj(player, sharedCardPool);
var player1 = new Player(new Taverns());
player1.cardList.push(new BaseCardObj(xiaoGuiQiuTu))
var defenderContextObj = new ContextObj(player1, sharedCardPool);

player.cardListInFighting = player.cardList
player1.cardListInFighting = player1.cardList
console.log(player1.cardListInFighting[0].baseCard.life)
var fight = new Fight(attackerContextObj, defenderContextObj);
fight.doFighting()
console.log(player1.cardListInFighting[0].baseCard.life)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
