<template>
  <div class="about">
       <header class="header">
            <div><img src="../../public/images/cat-logo.png" alt=""></div>
            <div>Cat-Ui</div>
            <nav>
                  <router-link to="/home">组件功能</router-link> |
                  <router-link to="/">团队成员</router-link> 
            </nav>
      </header>
      <div class="home-left"></div>
      <div class="home-right"> 
        <router-view/>
      </div>
  </div>
</template>
<script>
export default {
  name: 'enter',
  components: {},
  data () {
    return {
      vall:''
    }
  },
  methods:{
  
  }
}
</script>

<style scoped lang='less'>
.header{
  height: 60px;
  line-height: 60px;
  padding: 10px 100px;
   div{
     float: left;
      width: 80px;
      height: 100%;
      img{
        height: 100%;
      }
   }
   div:nth-child(2){
     color: #130074;
      font-size: 26px;
   }
   nav{
     float: left;
     margin-left: 50px;
      color: #130074;
     a{
      color: #130074;
       text-decoration: none;
       margin-left: 15px;
       margin-right: 15px;
     }
   }
}
</style>