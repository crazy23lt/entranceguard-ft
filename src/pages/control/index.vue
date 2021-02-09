<template>
  <view class="content">
    <image class="my-pic" :mode="mybg.mode" :src="mybg.src"></image>
    <view class="main">
      <view class="avatar">
        <image
          class="default-avatar"
          :mode="avatar.mode"
          :src="avatar.src"
        ></image>
      </view>
      <view class="userinfo mt100">
        <text class="username">{{ name }}</text>
        <text class="userphone">{{ phone | pipePhone }}</text>
        <view class="authstate">
          <text class="authtext">{{ auth | authText }}</text>
          <image
            class="icon-apply px10"
            :mode="iconApply.mode"
            :src="auth ? iconApply.trueSrc : iconApply.falseSrc"
          ></image>
        </view>
      </view>
      <view class="menu px140 mt50">
        <uiMenu @exit="_exitEvent" @service="_serviveEvent" />
      </view>
    </view>
  </view>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import uiMenu from "./components/ui-menu";
export default {
  created: function() {
    this.permissionRouter();
  },
  components: { uiMenu },
  computed: {
    ...mapGetters(["name", "auth", "phone"]),
  },
  data() {
    return {
      mybg: {
        src: "../../static/assets/icons/mybg.png",
        mode: "widthFix top",
      },
      avatar: {
        src: "../../static/assets/icons/icon-avatar.png",
        mode: "aspectFit",
      },
      iconApply: {
        trueSrc: "../../static/assets/icons/icon-apply-certify.png",
        falseSrc: "../../static/assets/icons/icon-edit.png",
        mode: "aspectFit",
      },
    };
  },
  methods: {
    ...mapActions({
      permissionRouter: "permission/generateRoutes",
      logout: "user/logout",
    }),
    imageError: function() {},
    _exitEvent: function() {
      this.logout()
        .then((res) => {
          this.$Router.replace({ name: "login" });
        })
        .catch((error) => console.info(error));
    },
    _serviveEvent: function() {},
  },
  filters: {
    pipePhone: function(phone) {
      let str = (phone + "").split("");
      str.splice(3, 4, "*", "*", "*", "*");
      return str.join("");
    },
    authText: function(authstate) {
      return authstate ? "已实名认证" : "未实名认证";
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  position: relative;
  .my-pic {
    width: inherit;
  }
  .main {
    position: absolute;
    top: 300rpx;
    width: inherit;
    height: calc(100% - 300rpx);
    border-top-left-radius: 50rpx;
    border-top-right-radius: 50rpx;
    background-color: white;
    @include flex(start, center, column);
    .avatar {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 204rpx;
      height: 204rpx;
      .default-avatar {
        height: inherit;
        width: inherit;
      }
    }
    .userinfo {
      @include flex(start, center, column);
      .username,
      .userphone {
        font-size: 36rpx;
        font-weight: 500;
        color: rgba(62, 69, 82, 1);
      }
      .authstate {
        @include flex(center, center);
        font-size: 24rpx;
        font-weight: 400;
        .icon-apply {
          width: 28rpx;
          height: 30rpx;
        }
      }
    }
    .menu {
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
