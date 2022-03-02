<template>
  <div class="pagination">
    <button :disabled="pageNo === 1" @click="handlePreviousNo">上一页</button>
    <button
      v-if="startNumAndEndNum.start > 1"
      :class="{ active: pageNo === 1 }"
      @click="handleChangeNo(1)"
    >
      1
    </button>
    <button v-if="startNumAndEndNum.start > 2">···</button>
    <!-- 中间连续页码 -->
    <button
      v-for="(page, index) in startNumAndEndNum.pageList"
      :key="index"
      :class="{ active: pageNo === page }"
      @click="handleChangeNo(page)"
    >
      {{ page }}
    </button>

    <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
    <button
      v-if="startNumAndEndNum.end < totalPage"
      :class="{ active: pageNo === totalPage }"
      @click="handleChangeNo(totalPage)"
    >
      {{ totalPage }}
    </button>
    <button :disabled="pageNo === totalPage" @click="handleNextNo">
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pageNo: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 5,
    },
    total: {
      type: Number,
      default: 0,
    },
    continues: {
      type: Number,
      default: 5,
    },
  },
  methods: {
    handlePreviousNo() {
      this.$emit("getPageNo", this.pageNo - 1);
    },
    handleChangeNo(num) {
      this.$emit("getPageNo", num);
    },
    handleNextNo() {
      this.$emit("getPageNo", this.pageNo + 1);
    },
  },
  computed: {
    //总共多少页
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    //计算出连续页面的起始数字和结束数字
    startNumAndEndNum() {
      const { continues, pageNo, totalPage } = this;
      let start = 0,
        end = 0,
        pageList = [];
      // 连续页面数字5(就是至少是5页)
      //总页数小于连续页码数
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        //连续页数是5，总页数大于5
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }
        if (end > totalPage) {
          start = totalPage - continues + 1;
          end = totalPage;
        }
      }
      for (let i = start; i < end + 1; i++) {
        pageList.push(i);
      }
      return { start, end, pageList };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
  &[disabled] {
    color: #c0c4cc;
    cursor: not-allowed;
  }

  &.active {
    cursor: not-allowed;
    background-color: #409eff;
    color: #fff;
  }
}
</style>
