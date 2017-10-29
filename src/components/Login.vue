<template>
  <div id="login">
    <div class="head">
      <img src="../assets/login_bg.png" width="100%"/>
    </div>
    <div class="content">
      <div>
        <x-input v-model="username" placeholder="用户名"></x-input>
      </div>
      <div>
        <x-input class="pwd" type="password" v-model="password"  placeholder="密码"></x-input>
      </div>
      <div class="row" @click="subLogin" >
        <x-button type="primary" :show-loading="isLogin">登录</x-button>
      </div>
    </div>
    <div class="content1">
      <span class="zhuce" @click="jump">注册账号</span>
      <span class="forgetpwd">忘记密码</span>
    </div>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux';

export default{
  name: 'login',
  data() {
    return {
      isLogin: false,
      username: '',
      password: '',
    };
  },
  methods: {
    jump() {
      this.$router.push({ name: 'Register' });
    },
    subLogin() {
      this.$resource('api/login.php').save({}, {username:this.username, password:this.password}).then((response) => {
        if (response.body.code == 200) {
          this.$router.push({ name: 'Home' });
        } else {
          this.alertMsg("error", response.body.msg?response.body.msg:'登录失败')
        }
      })
    },
  },
  components: {
    XInput,
    XButton,
    Group,
    Cell,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../style/weui.css";
  #login {
    overflow: hidden;
  }
  .head {
    overflow: hidden;
  }

  .content {
    margin: 2rem 1rem 0;
  }

  .content1 {
    margin: 1rem;
    margin-bottom: 4rem;
    font-size: .8rem;
  }

  .pwd{
    margin-top: 1rem;
  }

  .row {
    margin-top: 1rem;
  }

  .zhuce ,.forgetpwd{
    letter-spacing: 0.76px;
  }
  .zhuce {
    float: left;
    color: #999999;
  }

  .forgetpwd {
    float: right;
    color: #759AB2;
  }
</style>
