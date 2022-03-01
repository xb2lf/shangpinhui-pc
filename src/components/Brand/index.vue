<template>
  <!--商标-->
  <div class="brand">
    <div class="py-container">
      <ul class="brand-list">
        <li class="brand-item">
          <img :src="brand21" />
        </li>
        <li class="brand-item">
          <img :src="brand03" />
        </li>
        <li class="brand-item">
          <img :src="brand05" />
        </li>
        <li class="brand-item">
          <img :src="brand07" />
        </li>
        <li class="brand-item">
          <img :src="brand09" />
        </li>
        <li class="brand-item">
          <img :src="brand11" />
        </li>
        <li class="brand-item">
          <img :src="brand13" />
        </li>
        <li class="brand-item">
          <img :src="brand15" />
        </li>
        <li class="brand-item">
          <img :src="brand17" />
        </li>
        <li class="brand-item">
          <img :src="brand19" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import brand21 from "@/assets//images/home/brand_21.png";
import brand03 from "@/assets//images/home/brand_03.png";
import brand05 from "@/assets//images/home/brand_05.png";
import brand07 from "@/assets//images/home/brand_07.png";
import brand09 from "@/assets//images/home/brand_09.png";
import brand11 from "@/assets//images/home/brand_11.png";
import brand13 from "@/assets//images/home/brand_13.png";
import brand15 from "@/assets//images/home/brand_15.png";
import brand17 from "@/assets//images/home/brand_17.png";
import brand19 from "@/assets//images/home/brand_19.png";
export default {
  name: "",
  data() {
    return {
      brand21,
      brand03,
      brand05,
      brand07,
      brand09,
      brand11,
      brand13,
      brand15,
      brand17,
      brand19,
    };
  },
};
</script>

<style lang="less" scoped>
.brand {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .brand-list {
      overflow: hidden;
      padding: 15px 0;
      background: #f7f7f7;
      line-height: 18px;

      .brand-item {
        width: 120px;
        float: left;
        height: 37px;

        img {
          border-left: 1px dotted #ccc;
          padding: 0 10px;
        }

        &:first-child {
          img {
            border-left: 0;
          }
        }
      }
    }
  }
}
</style>
