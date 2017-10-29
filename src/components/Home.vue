<template>
  <div id="home">
    <div class="head">
      <span></span>
      <span class="center">学生信息</span>
      <span></span>
    </div>
    <div class="content">
      <div class="top">
        <div class="spic"><img if="!userInfo.img_url" src="../assets/portrait.jpeg" width="100" height="100"/>
          <img if="userInfo.img_url" :src="userInfo.img_url" width="100" height="100"/>
        </div>
      </div>
      <div class="snm">{{userInfo.student_name}}</div>
      <div class="mid">
        <div class="mid-row">
          <span class="dis"><img class="img" src="../assets/sId.png" height="20"/>学号</span>
          <span class="val">{{userInfo.student_code}}</span>
        </div>
        <div class="mid-row">
          <span class="dis"><img class="img" src="../assets/school.png" height="20"/>学校</span>
          <span class="val">{{userInfo.school_des}}</span>
        </div>
        <div class="mid-row">
          <span class="dis"><img class="img" src="../assets/class.png" height="20"/>班级</span>
          <span class="val">{{userInfo.grade_des}}{{userInfo.class_des}}</span>
        </div>
      </div>
    </div>
    <div class="content1" @click="toReport">
      <div class="text">最近睡眠评分：<span class="cont">{{userInfo.last_mark}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux';

export default{
  name: 'home',
  data() {
    return {
      userInfo: '',
    };
  },
  created(){
    this.initData();
  },
  methods: {
    initData() {
      this.$resource('api/student_info.php').get().then((response) => {
        this.userInfo = response.body.result;
      })
    },
    toReport() {
      this.$router.push({ name: 'Report' });
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

  #home {
    background: #153244;
    height: 100%;
    overflow: hidden;
  }

  .head {
    height: 50px;
    line-height: 50px;
    padding: 5px 10px;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    background: #132F40;
  }

  .img {
    vertical-align: middle;
  }

  .center {
    color: #fff;
    font-size: 1.1rem;
  }

  .content, .content1 {
    background: #122F42;
    margin: 1rem;
    border-radius: 8px;
    overflow: hidden;
  }

  .top {
    width: 100px;
    height: 100px;
    border-radius: 49px;
    margin: 1.5rem auto;
    overflow: hidden;
  }

  .spic, .snm {
    width: 100px;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    font-weight: 300;
  }

  .mid-row {
    height: 50px;
    line-height: 50px;
    padding: 0 1rem;
    font-size: .8rem;
  }

  .dis {
    color: #9FA8AF;
    font-weight: 300;
    float: left;
  }
  .img {
    margin-right: 5px;
    vertical-align: text-bottom;
  }
  .val {
    color: #fff;
    font-weight: 300;
    float: right;
  }

  .content1 {
    height: 100px;
    line-height: 100px;
    margin-bottom: 2rem;
  }
  .text {
    font-size: .8rem;
    color: #fff;
    text-align: center;
  }

  .cont{
    color: #73CBE3;
    font-size: 1.5rem;
  }


</style>
