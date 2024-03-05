<script>
export default {
  name: "CityManager",
  data(){
    return {
      wordId:''
    }
  },
  created() {
    console.log(this.$route.params.id)
    // todo 查询
  }
}
</script>

<template>
  <div>
    待开发，城市管理{{$route.params.id}}
  </div>
</template>

<style scoped>

</style>