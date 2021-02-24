<template>
  <div id="app">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 导航栏结束 -->

    <!-- 表单 -->
    <van-form>
      <van-field name="用户名" placeholder="请输入手机号" />
      <van-field type="password" name="密码" placeholder="请输入验证码" />
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <!-- 表单 结束-->

    <router-view />
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="less"></style>
