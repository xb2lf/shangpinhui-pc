<template>
  <div>
    <!-- 三级联动全局组件 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor floorTitle="手机通讯"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
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
};
</script>

<style lang="less" scoped></style>
