<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
        <router-view />
<!-- route 开启路由模式 -->
    <van-tabbar class="layout-tabbar" route>
      <van-tabbar-item to="/">
        <i slot="icon" class="iconfont toutiaoshouye"> </i>
        <span class="text">首页</span>
      </van-tabbar-item>

      <van-tabbar-item to="/qa">
        <i slot="icon" class="iconfont toutiaowenda"> </i>
        <span class="text">问答</span>
      </van-tabbar-item>

      <van-tabbar-item to="/video">
        <i slot="icon" class="iconfont toutiaoshipin"> </i>
        <span class="text">视频</span>
      </van-tabbar-item>

      <van-tabbar-item to="/my">
        <i slot="icon" class="iconfont toutiaowode"> </i>
        <span class="text">我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'LayoutPage',
  components: {},
  props: {},
  data() {
    return {
      // active: 0,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="less">
.layout-container {
  .layout-tabbar {
    i.iconfont {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
