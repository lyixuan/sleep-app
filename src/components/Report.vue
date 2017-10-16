<template>
  <div id="report">
    <div class="head">
      <img class="img" src="../assets/unfold.png" height="20"/>
      <span class="center">
        <group>
          <datetime format="YYYY-MM-DD" v-model="rdate" @on-change="changeDate"></datetime>
        </group>
      </span>
      <span></span>
    </div>
    <div class="cont-top">
      <span class="my">吴亦凡 - NO:23333 </span>
      <span class="pj">评价：<i>良</i></span>
    </div>
    <div class="chart" id="pie">
    </div>
    <div class="cont-md" >
      <div class="text">入寓总时长 <span class="num">89</span> h</div>
      <div class="pre-wrap1">
        <span class="pre p1" :style="{ width: p1W + '%' }">
        </span>
        <span class="pre p2" :style="{ width: p2W + '%' }">
        </span>
        <span class="pre p3" :style="{ width: p3W + '%' }">
        </span>
      </div>
      <div class="pre-wrap">
        <span class="pre p1" :style="{ width: p1WT + '%' }">
          深睡 <br>
          3h32min
        </span>
        <span class="pre p2" :style="{ width: p2WT + '%' }">
          浅睡 <br>
           3h32min
        </span>
        <span class="pre p3" :style="{ width: p3WT + '%' }">
          清醒 <br>
           3h32min
        </span>
      </div>
    </div>
    <div class="bm">
      <div class="grid-content" @click="detail(1)">
        <div  class="pic"><img src="../assets/xintiao.png"/>心跳</div>
        <div class="ft"><span>68</span> 次/分</div>
      </div>
      <div class="grid-content" @click="detail(2)">
        <div  class="pic"><img src="../assets/huxi.png" />呼吸率</div>
        <div class="ft"><span>68</span> 次/分</div>
      </div>
      <div class="grid-content" @click="detail(3)">
        <div class="pic"><img src="../assets/qiju.png"/>起居事件</div>
        <div class="ft"><span>68</span> 次</div>
      </div>
    </div>
  </div>
</template>

<script>
import { XInput, Group, XButton, Datetime, Cell } from 'vux';
import echarts from 'echarts';

export default{
  name: 'home',
  data() {
    return {
      username: '',
      password: '',
      p1W: 10,
      p2W: 30,
      p3W: 60,
      p1WT: 20,
      p2WT: 30,
      p3WT: 50,
      rdate: '2015-11-12',
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    jump() {
      this.$router.push({ name: 'Register' });
    },
    initChart() {
      const myChart = echarts.init(document.getElementById('pie'));

      const option = {
        title: {
          text: '睡眠占比',
          x: 'center',
          y: '60%',
          textStyle: {
            fontWeight: 'normal',
            color: '#cfcfcf',
            fontSize: 13,
          },
        },
        tooltip: {
          show: false,
        },
        toolbox: {
          show: false,
        },
        backgroundColor: 'transition',
        series: [{
          name: 'Pie1',
          type: 'pie',
          clockWise: false,
          radius: [80, 85],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              shadowBlur: 40,
              shadowColor: 'rgba(40, 40, 40, 0.5)',
            },
          },
          hoverAnimation: false,
          center: ['50%', '50%'],
          data: [{
            value: 25,
            label: {
              normal: {
                formatter: '{d}%',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '35',
                  fontWeight: 'normal',
                  color: '#3dd4de',
                },
              },
            },
            itemStyle: {
              normal: {
                color: '#3dd4de',
                shadowColor: '#3dd4de',
                shadowBlur: 10,
              },
            },
          }, {
            value: 75,
            name: 'invisible',
            itemStyle: {
              normal: {
                color: 'rgba(44,59,70,1)', // 未完成的圆环的颜色
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
              emphasis: {
                color: 'rgba(44,59,70,1)', // 未完成的圆环的颜色
              },
            },
          }],
        }],
      };
      myChart.setOption(option);
    },
    detail(f) {
      this.$router.push({ name: 'ReportDetail', param: { flag: f } });
    },
    changeDate() {
    },
  },
  components: {
    XInput,
    XButton,
    Group,
    Cell,
    Datetime,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../style/weui.css";

  * {
    box-sizing: border-box;
  }

  #report {
    background-image: linear-gradient(180deg, #173A4A 0%, #0F1A26 50%);
    min-height: 100%;
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

  .cont-top {
    color: #fff;
    font-size: .7rem;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
  }

  .my {
    float: left;
  }

  .pj {
    float: right;
  }

  .pj i{
    font-style: normal;
    color: #63BAD4;
    font-size: 20px;
  }

  .chart {
    height: 230px;
    width: 100%;
  }

  .cont-md {
    background: #122F42;
    margin:1rem;
    padding: 10px 0;
    border-radius: 8px;
    overflow: hidden;
  }

  .cont-md .num {
    color: #63BAD4;
    font-size: 1rem;
    font-weight: bold;
  }

  .cont-md .text {
    font-size: .9rem;
    color: #fff;
    text-align: center;
  }

  .pre-wrap, .pre-wrap1{
    padding: 10px;
    width: 100%;
    overflow: hidden;
  }

  .pre-wrap{
    padding-bottom: 10px;
  }
  .pre {
    float: left;
    font-size: .7rem;
  }

  .pre-wrap1 .p1 {
    border-top: .5rem solid #1D6896;
    color: #1D6896;
  }
  .pre-wrap1 .p2 {
    border-top: .5rem solid #63BAD4;
    color: #63BAD4;
  }
  .pre-wrap1 .p3 {
    border-top: .5rem solid #FF9431;
    color: #FF9431;
  }

  .pre-wrap .p1 {
    color: #1D6896;
  }
  .pre-wrap .p2 {
    color: #63BAD4;
  }
  .pre-wrap .p3 {
    color: #FF9431;
  }

  .bm {
    margin: 1rem;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
  }

  .grid-content{
    background: #122F42;
    border-radius: 8px;
    font-size: 13px;
    color: #63BAD4;
    height: 6rem;
  }

  .pic {
    margin:1.2rem .6rem 1rem;
    min-width: 4rem;
    text-align: center;
  }

  .ft {
    text-align: center;
  }

  .ft span{
    font-size: 1.5rem;
    font-weight: bold;
  }
  .pic img {
    vertical-align: middle;
    margin-right: 6px;
    width: 1.2rem;
  }

</style>
