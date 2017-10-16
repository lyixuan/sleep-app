<template>
  <div id="reportDetail">
    <div class="head">
      <img @click="back" class="img" src="../assets/backl.png" height="20"/>
      <span class="center">报告详情</span>
      <span></span>
    </div>
    <div class="cont-top">
      <span class="my">吴亦凡 - NO:23333 </span>
      <span class="pj">评价：<i>良</i></span>
    </div>
    <div class="cont-md">
      <div class="md-head"><span class="text"><img src="../assets/shuju.png" height="24"/>数据监护 </span><span class="num">89</span>%</div>
      <div class="pre-wrap">
        <span class="pre p2">
          在床时长 <br>
           <span>3时32分</span>
        </span>
        <span class="pre p1">
          睡眠时长 <br>
          <span>3时32分</span>
        </span>
        <span class="pre p3">
          清醒时长 <br>
           <span>3时32分</span>
        </span>
      </div>
      <div id="shuju">
      </div>
    </div>
    <div class="cont-md">
      <div class="md-head"><span class="text"><img src="../assets/xintiao.png" height="24"/>心跳 </span><span class="num">69 <i> 分/次</i></span></div>
      <div id="xintiao">
      </div>
    </div>
    <div class="cont-md">
      <div class="md-head"><span class="text"><img src="../assets/huxi.png" height="24"/>呼吸率 </span><span class="num">69 <i> 分/次</i></span></div>
      <div id="huxi">
      </div>
    </div>
    <div class="cont-md">
      <div class="md-head"><span class="text"><img src="../assets/qiju.png" height="24"/>起居事件 </span><span class="num">69 <i> 次</i></span></div>
      <div class="evt">
        <div class="evt1"><img src="../assets/time.png" height="25"/>21:30 入寓</div>
        <div class="evt2">正常</div>
      </div>
      <div class="evt">
        <div class="evt1"><img src="../assets/time.png" height="25"/>23:30 报警</div>
        <div class="evt2">频繁体动</div>
      </div>
      <div class="evt">
        <div class="evt1"><img src="../assets/time.png" height="25"/>24:30 事件</div>
        <div class="evt2">离床</div>
      </div>
    </div>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux';
import echarts from 'echarts';

export default{
  name: 'reportDetail',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    back() {
      this.$router.push({ name: 'Report' });
    },
    initChart() {
      const myChart = echarts.init(document.getElementById('shuju'));
      const myChart2 = echarts.init(document.getElementById('xintiao'));
      const myChart3 = echarts.init(document.getElementById('huxi'));

      const option = {
        legend: {
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['深睡', '浅睡', '清醒'],
          left: 'center',
          bottom: '0',
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          top: '2%',
          containLabel: true,
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B',
            },
          },
          data: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
        }],
        yAxis: [{
          type: 'value',
          minInterval: 1,
          axisTick: {
            show: true,
          },
          axisLine: {
            lineStyle: {
              color: '#57617B',
            },
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14,
            },
          },
          splitLine: {
            lineStyle: {
              color: '#57617B',
            },
          },
        }],
        series: [{
          name: '深睡',
          type: 'line',
          step: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(137, 189, 27, 0.3)',
              }, {
                offset: 0.8,
                color: 'rgba(137, 189, 27, 0)',
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10,
            },
          },
          itemStyle: {
            normal: {
              color: 'rgb(137,189,27)',
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12,

            },
          },
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        }, {
          name: '浅睡',
          type: 'line',
          step: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 136, 212, 0.3)',
              }, {
                offset: 0.8,
                color: 'rgba(0, 136, 212, 0)',
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10,
            },
          },
          itemStyle: {
            normal: {
              color: 'rgb(0,136,212)',
              borderColor: 'rgba(0,136,212,0.2)',
              borderWidth: 12,

            },
          },
          data: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        }, {
          name: '清醒',
          type: 'line',
          step: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(219, 50, 51, 0.3)',
              }, {
                offset: 0.8,
                color: 'rgba(219, 50, 51, 0)',
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10,
            },
          },
          itemStyle: {
            normal: {

              color: 'rgb(219,50,51)',
              borderColor: 'rgba(219,50,51,0.2)',
              borderWidth: 12,
            },
          },
          data: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        },
        ],
      };

      const option2 = {
        legend: {
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          right: '4%',
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B',
            },
          },
          data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55'],
        }],
        yAxis: [{
          type: 'value',
          name: '次/分',
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: '#57617B',
            },
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14,
            },
          },
          splitLine: {
            lineStyle: {
              color: '#57617B',
            },
          },
        }],
        series: [{
          name: '移动',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(137, 189, 27, 0.3)',
              }, {
                offset: 0.8,
                color: 'rgba(137, 189, 27, 0)',
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10,
            },
          },
          itemStyle: {
            normal: {
              color: 'rgb(137,189,27)',
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12,

            },
          },
          data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
        },
        ],
      };
      myChart.setOption(option);
      myChart2.setOption(option2);
      myChart3.setOption(option2);
    },
    detail(f) {
      this.$router.push({ name: 'ReportDetail', param: { flag: f } });
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

  * {
    box-sizing: border-box;
  }

  #reportDetail {
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

  .pj i {
    font-style: normal;
    color: #63BAD4;
    font-size: 20px;
  }

  .cont-md {
    background: #122F42;
    margin:1rem;
    padding: 10px 0;
    border-radius: 8px;
    overflow: hidden;
  }

  .md-head {
    padding: 10px;
    border-bottom: 2px solid #1C436D;;
  }

  .cont-md .num {
    color: #63BAD4;
    font-size: 1rem;
    float: right;
    font-weight: bold;
  }

  .cont-md .num i {
    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: .7rem;
  }

  .cont-md .text {
    font-size: .8rem;
    color: #fff;
  }

  .cont-md .text img{
    margin-right: 5px;
    vertical-align: text-bottom;
  }
  .pre-wrap{
    padding: 10px;
    width: 100%;
    margin-bottom: 1rem;
    overflow: hidden;
  }

  .pre-wrap{
    padding-bottom: 10px;
  }
  .pre {
    float: left;
    width: 32%;
    font-size: .7rem;
    color: #cfcfcf;
  }

  .pre span {
    font-size: 1rem;
    color: #fff;
  }

  #shuju {
    width: 100%;
    height: 10rem;
  }

  #xintiao {
    width: 100%;
    height: 12rem;
  }

  #huxi {
    width: 100%;
    height: 12rem;
  }

  .evt1 {
    overflow: hidden;
    margin: 10px;
    color: #cfcfcf;
    font-size: .8rem;
  }

  .evt1 img {
    vertical-align: text-bottom;
    margin-right: 10px;
  }

  .evt2 {
    font-weight: 300;
    height: 2.5rem;
    line-height: 2.5rem;
    color: #fff;
    margin: 0 20px;
    padding: 0 22px;
    border-left: 1px solid #213A55;
  }


</style>
