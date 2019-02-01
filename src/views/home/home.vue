<template>
  <div>
    <div class='bg'>
        <div class='bg-par w1180 clear'>
          <img src='../../assets/home/yxc-bg1.jpg' title='影信查' />
          <img src='../../assets/home/yxc-bg2.jpg' title='影信查' />
          <img src='../../assets/home/yxc-bg3.jpg' title='影信查' />
          <img src='../../assets/home/yxc-bg4.jpg' title='影信查' />
          <img src='../../assets/home/yxc-bg5.jpg' title='影信查' />
          <img src='../../assets/home/yxc-bg6.jpg' title='影信查' />
        </div>
        <div class='search-par'>
           <div class='title'>影视行业信用信息服务平台</div>
           <div class='search'>
              <div class='search-ipt'>
                <input type='text' placeholder='输入艺人信息，检索艺人信用信息'>
                <div class='search-icon'></div>
              </div>
              <ul class='search-type clear center'>
                <li class='all' data-type=''>全部</li>
                <li class='popular-people' data-type=''>热点人群</li>
                <li class='works' data-type=''>作品</li>
                <li class='movie-company' data-type=''>影视企业</li>
                <li class='movie-people' data-type=''>影视人</li>
                <li class='actor-company' data-type=''>演艺企业</li>
                <li class='actor' data-type=''>演艺人</li>
              </ul>
           </div>
        </div>
      </div>
      <div class='data big-data'>
         <div class='title'>大数据展示</div>
         <div class='line center'></div>
         <div class='title-desc'>大数据展示文案说明</div>
         <ul class='con clear center'>
            <li class='company-num'>
              <p class='num'><span>40</span>+</p>
              <p class='name'>参与影视公司数量</p>
            </li>
            <li class='actor-num'>
              <p class='num'><span>678</span>+</p>
              <p class='name'>在线影视演艺演员人数</p>
            </li>
            <li class='works-num'>
              <p class='num'><span>3425</span>+</p>
              <p class='name'>作品库存量</p>
            </li>
            <li class=''>
              <p class='num'><span>2000</span>+</p>
              <p class='name'>奖惩信息</p>
            </li>
         </ul>
      </div>
      <div class='data authorize-data w1180'>
         <div class='title'>权威数据统计来源</div>
         <div class='line center'></div>
         <div class='title-desc'>让信息更加真实可靠，有据可依</div>
         <ul class='con clear center'>
            <li class='source1'>
              <img src='../../assets/home/auth-data1.png' title='权威数据' />
              <p class='tit'>北京市司法统计平台</p>
              <p class='con'>上海市司法局是主管上海市司法行政工作的市政府组成部门，是上海市政法机关的重要组成部分。</p>
            </li>
            <li class='source2'>
              <img src='../../assets/home/auth-data2.png' title='权威数据' />
              <p class='tit'>北京市司法统计平台</p>
              <p class='con'>上海市司法局是主管上海市司法行政工作的市政府组成部门，是上海市政法机关的重要组成部分。</p>
            </li>
            <li class='source3'>
              <img src='../../assets/home/auth-data3.png' title='权威数据' />
              <p class='tit'>北京市司法统计平台</p>
              <p class='con'>上海市司法局是主管上海市司法行政工作的市政府组成部门，是上海市政法机关的重要组成部分。</p>
            </li>
         </ul>
      </div>
  </div>
</template>

<script>
  import CountUp from '../../components/CountUp.vue'
  export default {
    name: 'home',
    components: {
      CountUp
    },
    methods: {

    }
  }
</script>

<style lang='less' scoped>
  .bg {
    position: relative;
    width: 1920px;
    height: 724px;
    background-image: url('../../assets/home/yxc-bg.png');
    background-repeat: no-repeat;
    overflow: hidden;
    .bg-par {
      img {
        display: block;
      }
    }

    .search-par {
      position: absolute;
      width: 650px;
      top: 174px;
      left: 50%;
      margin-left: -325px;
      color: #fff;
      .title {
        margin-bottom: 57px;
        text-align: center;
        font-size: 48px;
      }
      .search {
        .search-ipt {
          box-sizing: border-box;
          width: 650px;
          height: 53px;
          line-height: 53px;
          padding-left: 16px;
          margin-bottom: 14px;
          background: #FFFFFF;
          border-radius: 2px;
          input {
            width: 300px;
            height: 50px;
            line-height: 50px;
            outline: none;
          }
          .search-icon {
            float: right;
            width: 53px;
            height: 53px;
            background-image: url('../../assets/home/search-icon.jpg');
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
          }
        }
        .search-type {
          width: 450px;
          font-size: 14px;
          li {
            float:left;
            margin-right: 18px;
            cursor: pointer;
          }
          .actor {
            margin-right: 0;
          }
        }
      }
    }
  }
  .data {
    text-align: center;
    .title {
      margin-bottom: 16px;
      font-size: 38px;
      color: #F58523;
    }
    .line {
      width: 30px;
      height: 1px;
      background: #979797;
      margin-bottom: 16px;
    }
    .title-desc {
       font-size: 14px;
       color: #4A4A4A;
    }
  }
  .big-data {
    padding-top: 98px;
    ul {
      width: 1164px;
      margin-top: 56px;
      li {
        float: left;
        box-sizing: border-box;
        width: 270px;
        height: 270px;
        border: 1px solid #9B9B9B;
        border-radius: 2px;
        padding-top: 72px;
        padding-bottom: 78px;
        margin-right: 28px;
        cursor: pointer;
        p {

        }
        .num {
          height: 95px;
          line-height: 95px;
          margin-bottom: 9px;
          font-size: 68px;
        }
        .name {
          font-size: 16px;
        }
        &:hover {
          background: #F58523;
          border: 1px solid #F58523;
          p {
            color: #fff;
          }
        }
      }
      li:last-child {
        margin-right: 0;
      }
    }
  }
  .authorize-data {
      padding-top: 87px;
      padding-bottom: 182px;
      ul {
        margin-top: 118px;
        text-align: center;
        li {
          float: left;
          box-sizing: border-box;
          width: 324px;
          margin-right: 104px;
          color: #4A4A4A;
          p {

          }
          .tit {
           margin-bottom: 22px;
           font-size: 28px;
          }
          .con {
            line-height: 20px;
            text-align:left;
            font-size: 14px;
          }
        }
        li:last-child {
          margin-right: 0;
        }
        .source1 {
          .tit {
            margin-top: 112px;
          }
        }
        .source2 {
          .tit {
            margin-top: 75px;
          }
        }
        .source3 {
          .tit {
            margin-top: 120px;
          }
        }
      }
    }
</style>
