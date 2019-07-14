<template>
  <div id="home">
    <router-link :to="userInfo._id ? '/home': '/login'" class="profile-link">
    <i class="el-icon-user-solid"></i>
    <div>{{userInfo.name ? userInfo.name : userInfo.phone}}</div>
    <el-button type="danger" @click="logout">退出登录</el-button>
    </router-link>
  </div>
  </template>

    <script>
  import {mapState,mapActions} from 'vuex'
  export default {
    name: "home",
    computed: {
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getUserInfo()

    },
    methods:{
      ...mapActions(['getUserInfo']),
      logout(){
        sessionStorage.removeItem("Flag")
        this.$router.push('/login')
        this.$store.dispatch("userLogin", false);
        this.$store.dispatch('logout')
      },
    },
  }
</script>

<style scoped>

</style>
