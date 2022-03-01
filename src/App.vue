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
};
</script>

<style scoped></style>
