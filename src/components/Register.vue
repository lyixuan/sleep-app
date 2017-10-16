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
        <x-input class="l2" type="password" v-model="password"  placeholder="密码"></x-input>
      </div>
      <div>
        <x-input class="l2" v-model="relation"  placeholder="家属关系"></x-input>
      </div>
      <div>
        <x-input class="l2" v-model="student"  placeholder="绑定孩子"></x-input>
      </div>
      <div class="row">
        <x-button type="primary">注册</x-button>
      </div>
    </div>
    <div class="content1">
      <div class="zhuce" @click="jump">已有账号?去登录</div>
    </div>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux';

export default{
  name: 'register',
  data() {
    return {
      username: '',
      password: '',
      relation: '',
      student: '',
    };
  },
  methods: {
    jump() {
      this.$router.push({ name: 'Login' });
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
  .head {
    overflow: hidden;
  }

  .content {
    margin: 2rem 1rem 0;
  }

  .content1 {
    margin: 1rem;
    font-size: .8rem;
  }

  .l2{
    margin-top: 1rem;
  }

  .row {
    margin-top: 1rem;
  }

  .zhuce{
    letter-spacing: 0.76px;
  }
  .zhuce {
    text-align: center;
    color: #999999;
  }

</style>
