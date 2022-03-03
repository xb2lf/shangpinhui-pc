<template>
  <div>
    <!-- 三级联动全局组件 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  ListContainer,
  Recommend,
  Rank,
  Like,
  Floor,
  Brand,
} from "@/components";

export default {
  name: "",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  data() {
    return {};
  },
  async mounted() {
    // 派发action,获取floor组件的数据
    this.$store.dispatch("getFloorList");
    // 获取用户信息在首页展示
    /* this.$store.dispatch("getUserInfo"); */
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style lang="less" scoped></style>
