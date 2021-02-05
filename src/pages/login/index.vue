<template>
  <view class="content" :style="{ paddingTop: barHeight + 'px' }">
    <view class="logo-wrapper">
      <image class="logo-pic" mode="aspectFit" :src="loginLogo"></image>
    </view>
    <form style="width:100%;" @submit="formSubmit">
      <view class="form-main">
        <view class="form-group">
          <input
            maxlength="11"
            class="form-control"
            type="number"
            placeholder="请输入手机号码"
            v-model="phoneNumber"
          />
        </view>
        <view class="form-group">
          <input
            maxlength="6"
            type="number"
            class="form-control"
            placeholder="请输入验证码"
            v-model="authCode"
            @input="_handlerInput"
          />
          <button class="form-codetext" v-if="time > 0">
            {{ time }}s后重新发送
          </button>
          <button class="form-getcode" @click="onGetCode" v-if="time == 0">
            获取验证码
          </button>
        </view>
        <view class="form-action">
          <button form-type="submit" class="form-button" type="default">
            登录
          </button>
        </view>
      </view>
    </form>
  </view>
</template>

<script>
import { mapGetters } from "vuex";
let timer;
export default {
  onLoad: function() {},
  data() {
    return {
      loginLogo: "../../static/assets/ct-logo.png",
      time: 0,
      phoneNumber: "",
      authCode: "",
    };
  },
  computed: {
    ...mapGetters(["barHeight"]),
  },
  methods: {
    /*----- 提交表单 -----*/
    formSubmit: function() {},
    /*----- 获取验证码 -----*/
    onGetCode: function() {
      this.time = 60;
      let timedCount = () => {
        this.time -= 1;
        if (this.time === 0) {
          clearTimeout(timer);
        } else {
          timer = setTimeout(timedCount, 1000);
        }
      };
      setTimeout(timedCount, 1000);
    },
    /*----- input框校验 -----*/
    _handlerInput: function() {},
    /*----- 请求服务端验证码 -----*/
    _handlerAuthCode: function() {},
  },
  beforeDestroy() {
    clearTimeout(timer);
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .logo-wrapper {
    margin-top: 100rpx;
    width: 100%;
    height: 300rpx;
    .logo-pic {
      width: 100%;
      height: 100%;
    }
  }
  .form-main {
    margin-top: 100rpx;
    display: flex;
    flex-direction: column;
    padding: 0 60rpx;
    .form-group {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0rpx;
      margin-bottom: 20rpx;
      border-bottom: #dedede 1px solid;
      .form-control {
        flex: 1;
        padding: 10rpx 0;
        border: 0;
        font-size: 28rpx;
      }
      .form-codetext,
      .form-getcode {
        background-color: transparent;
        font-size: 28rpx;
        font-weight: 400;
        color: #b1b1b1;
        &::after {
          border: 0;
        }
      }
      .form-getcode {
        color: #0089f2;
      }
    }
    .form-action {
      margin-top: 20rpx;
      .form-button {
        font-size: 32rpx;
        color: #b1b1b1;
        background-color: #e8ecf1;
        border-radius: 40rpx;
      }
    }
  }
}
</style>
