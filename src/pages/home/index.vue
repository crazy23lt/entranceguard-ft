<template>
  <view class="content">
    <image mode="aspectFill" class="bg-pic" :src="bgPic"></image>
    <view
      class="main"
      :style="{ paddingTop: barHeight + 'px' }"
      :class="{ active: menuFlag }"
    >
      <view class="operation-set" :class="{ activeset: menuFlag }">
        <view class="icon-item" v-for="(item, index) in iconItem" :key="index">
          <image
            @click="tapOptionsHandler(item.name)"
            class="icon"
            :src="item.path"
          ></image>
        </view>
      </view>
      <view
        class="keys"
        :style="{ paddingTop: barHeight + 'px' }"
        :class="{ activekey: menuFlag }"
      >
        <view class="key-title" v-if="!menuFlag">
          <image class="key-title-bg" :src="keyBgPic"></image>
        </view>

        <view class="key-main" :class="{ keymainactive: menuFlag }">
          <view class="default-addkey">
            <image class="add-key" :src="addKeyPic"></image>
          </view>
          <view
            class="up-menu"
            :class="{ activemenu: menuFlag }"
            @click="tapMenu"
            v-if="token"
          >
            <image class="menu-icon" :src="menuIcon"></image>
          </view>
          <view v-if="token" class="scan-code">
            <image class="menu-icon" :src="scanCodeIcon"></image>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      bgPic: "../../static/assets/default_image@2x.png",
      keyBgPic: "../../static/assets/icons/mainbg.png",
      addKeyPic: "../../static/assets/icons/btn-addkey.png",
      openKeyPic: "../../static/assets/icons/btn-openkey.png",
      openSuccessPic: "../../static/assets/icons/btn-opensuccess.png",
      openFailPic: "../../static/assets/icons/btn-openfail.png",
      keyOfflinePic: "../../static/assets/icons/btn-keyoffline.png",
      iconItem: [
        { path: "../../static/assets/icons/btn-my.png", name: "my" },
        { path: "../../static/assets/icons/btn-service.png", name: "service" },
        { path: "../../static/assets/icons/btn-tip2x.png", name: "tip" },
      ],
      menuIcon: "../../static/assets/icons/btn-showmore.png",
      scanCodeIcon: "../../static/assets/icons/icon-scan.png",
      menuFlag: false,
    };
  },
  computed: {
    ...mapGetters(["token", "barHeight"]),
  },
  onLoad() {},

  methods: {
    tapMenu: function() {
      this.menuFlag = !this.menuFlag;
    },
    tapOptionsHandler: function(name) {
      console.info(name);
      switch (name) {
        case "tip":
          this.$Router.push({
            path: "/pages/control/index",
            query: {},
          });
          break;
        case "service":
          this.$Router.push({
            path: "/pages/control/index",
            query: {},
          });
          break;
        case "my":
          this.$Router.push({
            path: "/pages/control/index",
            query: {},
          });
          break;
      }
    },
  },
};
</script>

<style>
/* 最外层 */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* 背景层 */
.bg-pic {
  height: 100vh;
  width: 100vw;
}
/* 应用层 */
.main {
  position: absolute;
  bottom: 0;
  height: 800rpx;
  width: 100vw;
  transition: height 0.3s ease-out;
  box-sizing: border-box;
}
.active {
  height: 100%;
}
/* 用户个人服务 */
.operation-set {
  width: inherit;
  height: 270rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.activeset {
  justify-content: flex-end;
  flex-direction: row;
  height: 100rpx;
  box-sizing: border-box;
  padding-left: 400rpx;
}
.icon-item {
  padding-right: 30rpx;
  margin: 6rpx 0;
  height: 65rpx;
  width: inherit;
  text-align: right;
}
.icon {
  width: 65rpx;
  height: 65rpx;
}
/* 门禁钥匙服务 */
.keys {
  position: absolute;
  bottom: 0;
  width: inherit;
  height: 530rpx;
  overflow: hidden;
  transition: all 0.3s ease-out;
}
.activekey {
  height: calc(100vh - 100rpx);
  box-sizing: border-box;
}
.key-title {
  height: 100rpx;
  width: inherit;
}
.key-title-bg {
  width: inherit;
  height: 100%;
}

.key-main {
  height: 100%;
  width: inherit;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.keymainactive {
  border-top-left-radius: 50rpx;
  border-top-right-radius: 50rpx;
}

.default-addkey {
  width: 365rpx;
  height: 365rpx;
}
.add-key {
  width: inherit;
  height: inherit;
}

.up-menu {
  width: 88rpx;
  height: 66rpx;
  position: absolute;
  right: 50rpx;
  bottom: 50rpx;
  transform: rotate(0turn);
}
.activemenu {
  transform: rotate(0.5turn);
}
.scan-code {
  width: 100rpx;
  height: 100rpx;
  position: absolute;
  left: 50rpx;
  bottom: 50rpx;
}
.menu-icon {
  width: inherit;
  height: inherit;
}
</style>
