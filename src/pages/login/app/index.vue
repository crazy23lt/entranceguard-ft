<template>
  <view class="content" :style="{ paddingTop: barHeight + 'px' }">
    <view class="header">
      <image class="logo-pic" mode="aspectFit" :src="loginLogo"></image>
      <text class="title">福田智慧门禁</text>
    </view>
    <view class="main">
      <form style="width:100%;" @submit="formSubmit">
        <view class="form-main">
          <view class="form-group">
            <input
              maxlength="11"
              class="form-control"
              type="number"
              placeholder="请输入手机号码"
              v-model="formData.phoneNumber"
              @blur="_handlerInputPhone"
            />
          </view>
          <view class="form-group"></view>
          <view class="form-action"></view>
        </view>
      </form>
    </view>
    <view class="footer"></view>
  </view>
</template>

<script>
import deviceInfo from "@/mixin/deviceInfo.js";
export default {
  mixins: [deviceInfo],
  data() {
    return {
      loginLogo: "../../../static/assets/ct-logo.png",
    };
  },
  onReady() {
    console.info(this.barHeight);
  },
  methods: {
    /*----- 提交表单 -----*/
    formSubmit: function() {},
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    .logo-pic {
      width: 240rpx;
      height: 240rpx;
    }
    .title {
      font-size: 30rpx;
      color: rgb(177, 177, 177);
      text-align: center;
    }
  }
  .main {
    .form-main {
      margin-top: 100rpx;
      display: flex;
      flex-direction: column;
      padding: 0 160rpx;
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
        .active {
          background: linear-gradient(70deg, #87cefa, #1e90ff);
          color: white;
        }
      }
    }
  }
  .footer {
  }
}
</style>
