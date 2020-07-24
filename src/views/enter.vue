<template>
  <div class="home">
          <header class="header">
            <div><img src="../../public/images/cat-logo.png" alt=""></div>
            <div>Cat-Ui</div>
            <nav>
                  <router-link to="/home">组件功能</router-link> |
                  <router-link to="/">团队成员</router-link> 
            </nav>
          </header>
          <div class="content">
             <div class="content-left">
                <h1><span>Cat-Ui</span></h1>
                <h3>基于VUE3.0，提供高效协作开发的美丽UI框架</h3>
                <p>作者：<span>雷一</span><span>李小</span>
                </p>
                <div>
                  <router-link to="/home">组件功能</router-link>
                  <a href="https://github.com/saraphig/cat-ui.git" target="_blank">GitHub</a>
                </div>
             </div>
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
.home{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #fff;
     background: url(../../public/images/bg.jpg) no-repeat center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    overflow: hidden;

 
}
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
     color: #fff;
      font-size: 26px;
   }
   nav{
     float: left;
     margin-left: 50px;
      color: #fff;
     a{
      color: #fff;
       text-decoration: none;
       margin-left: 15px;
       margin-right: 15px;
     }
   }
}
.content{
  padding-top: 130px;
  padding-left: 120px;
  text-align: center;

  .content-left{
    float: left;
    width:100%;
    h1{
      text-align: center;
      margin-bottom: 50px;
      span{
        font-size: 66px;
       color: #fff;
       font-weight: 100;
       position: relative;
       display: inline-block;
       
      }
        span:after{
      content: "";
      margin-top:10;
      display: block;      
      height: 3px;
      width: 60px;
      // background: #13f0c4;
      // background: #ff0198;
      background: #fff;
      position: absolute;
      bottom: -5px;
      left: 62px;
    }
    }
   
    h3{
      font-size: 28px;
      font-weight: 100;
       color: #fff;
      margin-bottom: 20px;
    }
    p{
      font-size: 20px;
      margin: 0px;
       color: #fff;
      span{
        margin-left: 15px;
        margin-right: 15px;
      }
      span:nth-child(1){
        color:#fff ;
      }
      span:nth-child(2){
        color:#fff ;

      }
    }
    div{
      margin-top: 100px;
      a{
        margin-left: 15px;
        margin-right: 15px;
        border-radius: 12px;
        display: inline-block;
        height: 35px;
        line-height: 35px;
        color: #fff;
        padding-left: 20px;
        padding-right: 20px;
        text-decoration: none;
      }
      a:nth-child(1){
        background: #fff;
        color: #000;
  
      }
      a:nth-child(2){
           background: #ff0198;

      }
      a:nth-child(3){
         background: #13f0c4;
      
      }
    }
  }
  .content-right{
     float: left;
    width: 30%;
  }
}
</style>