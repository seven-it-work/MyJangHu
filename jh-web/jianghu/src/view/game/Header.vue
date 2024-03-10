<script>
import Cookies from "js-cookie";

export default {
  name: "Header",
  created() {
    const peopleObj = Cookies.get("peopleObj")
    console.log(peopleObj)
  }
}
</script>

<template>
  <div>
    玩家名称：{{}}
  </div>
</template>

<style scoped>

</style>