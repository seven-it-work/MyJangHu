<template>
  <div>
    <Player></Player>
  </div>
</template>

<script lang="ts">
import PlayerVue from "./views/Player.vue";


export default {
  name: "App",
  components: {Player: PlayerVue}
}
</script>

<style scoped>

</style>
