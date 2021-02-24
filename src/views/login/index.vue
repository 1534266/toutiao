<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 导航栏结束 -->

    <!-- 登录菜单 -->
    <van-form @submit="onSubmit">
      <van-field name="用户名" placeholder="请输入手机号" v-model="user.mobile"  :rules="userFormRules.mobile"
        type="number"
        maxlength="11">
        <i slot="left-icon" class="iconfont toutiaoshouji"></i>
      </van-field>

      <van-field
        v-model="user.code"
        name="验证码"
        placeholder="请输入验证码"
         :rules="userFormRules.code"
        type="number"
        maxlength="6"
      >
        <i slot="left-icon" class="iconfont toutiaoyanzhengma"></i>
        <template #button>
          <van-button class="send-sms-btn" round size="small" type="default"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <!-- 登录菜单 结束-->
    <router-view />
  </div>
</template>
<script>
import { login } from '@/api/user'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data() {
    return {
      // 添加 `user` 数据字段
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      userFormRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3|5|7|8]\d{9}$/,
          message: '手机号格式错误'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码格式错误'
        }]
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onSubmit() {
      // 开始转圈圈
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '登录中...' // 提示消息
      })

      try {
        const res = await login(this.user)
        console.log('登录成功', res)
        // 提示 success 或者 fail 的时候，会先把其它的 toast 先清除
        this.$toast.success('登录成功')
      } catch (err) {
        console.log('登录失败', err)
        this.$toast.fail('登录失败，手机号或验证码错误')
      }
    }
  }
}
</script>
<style lang="less">
.login-container {
  .iconfont {
    font-size: 37px;
  }
  .send-sms-btn {
    // width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
