<template>
  <!--今日推荐-->
  <div class="today-recommend">
    <div class="py-container">
      <ul class="recommend">
        <li class="clock">
          <div class="time">
            <img :src="Clock" />
            <h3>今日推荐</h3>
          </div>
        </li>
        <li class="banner">
          <img :src="Today01" />
        </li>
        <li class="banner">
          <img :src="Today02" />
        </li>
        <li class="banner">
          <img :src="Today03" />
        </li>
        <li class="banner">
          <img :src="Today04" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Clock from "@/assets/images/home/clock.png";
import Today01 from "@/assets/images/home/today01.png";
import Today02 from "@/assets/images/home/today02.png";
import Today03 from "@/assets/images/home/today03.png";
import Today04 from "@/assets/images/home/today04.png";
export default {
  name: "",
  data() {
    return {
      Clock,
      Today01,
      Today02,
      Today03,
      Today04,
    };
  },
};
</script>

<style lang="less" scoped>
.today-recommend {
  .py-container {
    width: 1200px;
    margin: 0 auto;

    .recommend {
      height: 165px;
      background-color: #eaeaea;
      margin: 10px 0;
      display: flex;

      .clock {
        width: 16.67%;
        background-color: #5c5251;
        color: #fff;
        font-size: 18px;
        text-align: center;

        .time {
          padding: 30px 0;
        }

        h3 {
          margin: 9px 0;
          font-weight: 700;
          font-size: 18px;
          line-height: 30.06px;
        }
      }

      .banner {
        width: 20.83%;

        img {
          width: 100%;
          height: 100%;
          transition: all 400ms;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>
