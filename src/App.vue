<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import { Header, Footer } from "./components";
export default {
  name: "",
  components: { Header, Footer },
  mounted() {
    // 通知vuex发请求，获取数据，存储于仓库当中
    this.$store.dispatch("getCategoryList");
  },
};
</script>

<style scoped></style>
