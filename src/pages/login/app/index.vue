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
            <image
              class="icon"
              src="../../../static/assets/icons/phone.png"
            ></image>
            <input
              maxlength="11"
              class="form-control ml20"
              type="number"
              placeholder="请输入手机号码"
              v-model="formData.phoneNumber"
              @blur="_handlerInputPhone"
            />
          </view>
          <view class="form-group">
            <image
              class="icon"
              src="../../../static/assets/icons/lock.png"
            ></image>
            <input
              class="form-control ml20"
              placeholder="请输入密码"
              v-model="formData.password"
              @blur="_handlerInputPhone"
              :type="inputType"
            />
            <image class="icon" @click="changeEye" :src="eyesrc"></image>
          </view>
          <view class="form-action">
            <button
              form-type="submit"
              class="form-button active"
              type="default"
            >
              登录
            </button>
            <button form-type="submit" class="form-button mt30" type="default">
              注册
            </button>
          </view>
        </view>
      </form>
    </view>
    <view class="footer mt100">
      <view class="line">
        <view class="before"></view>
        <text class="px10">快捷登录</text>
        <view class="after"></view>
      </view>
      <view class="icons">
        <image
          style="transform:scale(1.1);"
          class="login-icon mr50 mt50"
          src="../../../static/assets/icons/QQ.png"
          @click="loginQQ"
        ></image>
        <image
          class="login-icon ml50 mt50"
          src="../../../static/assets/icons/weixin-copy.png"
          @click="loginWX"
        ></image>
      </view>
    </view>
  </view>
</template>

<script>
import deviceInfo from "@/mixin/deviceInfo.js";
export default {
  mixins: [deviceInfo],
  data() {
    return {
      loginLogo: "../../../static/assets/ct-logo.png",
      formData: {
        phoneNumber: "13636065890",
        password: "123456",
      },
      eyeicon: {
        openSrc: "../../../static/assets/icons/eye.png",
        closeSrc: "../../../static/assets/icons/eyes_close.png",
        flag: false,
      },
    };
  },
  computed: {
    inputType: function() {
      return this.eyeicon.flag ? "text" : "password";
    },
    eyesrc: function() {
      return this.eyeicon.flag ? this.eyeicon.openSrc : this.eyeicon.closeSrc;
    },
  },
  onReady() {
    console.info(this.barHeight);
  },
  methods: {
    /*----- 提交表单 -----*/
    formSubmit: function() {
      this.$store
        .dispatch("user/login", this.formData)
        .then((res) => {
          this.$Router.replace({ name: "home" });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    _handlerInputPhone: function() {},
    loginQQ: function() {},
    loginWX: function() {},
    changeEye: function() {
      this.eyeicon.flag = !this.eyeicon.flag;
    },
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
        .icon {
          width: 40rpx;
          height: 40rpx;
        }
      }
      .form-action {
        margin-top: 20rpx;
        .form-button {
          font-size: 32rpx;
          color: #b1b1b1;
          border-radius: 40rpx;
          border: none;
        }
        .active {
          background: linear-gradient(70deg, #87cefa, #1e90ff);
          color: white;
        }
      }
    }
  }
  .footer {
    .line {
      @include flex(center, center, row);
      .before,
      .after {
        width: 30%;
        height: 1rpx;
        border-top: 1px solid #d8d8d8;
      }
    }
    .icons {
      box-sizing: border-box;
      @include flex(center, center, row);
      .login-icon {
        width: 80rpx;
        height: 80rpx;
      }
    }
  }
}
</style>
