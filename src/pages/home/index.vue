<template>
  <view class="content" :style="{ width: safeArea.width + 'px' }">
    <image mode="aspectFill" class="bg-pic" :src="bgPic"></image>
    <view
      class="main"
      :style="{ paddingTop: barHeight + 'px' }"
      :class="{ active: menuFlag }"
    >
      <view class="operation-set" :class="{ activeset: menuFlag }">
        <view class="icon-item" v-for="(item, index) in iconItem" :key="index">
          <image
            class="icon"
            @click="tapOptionsHandler(item.name)"
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
          <scroll-view
            enable-flex="true"
            v-if="doorKeys.length"
            scroll-y="true"
            class="scroll"
            :scroll-top="scrollTop"
            :scroll-anchoring="true"
            :show-scrollbar="false"
          >
            <view
              class="list-keys"
              v-for="(item, index) in doorKeys"
              :key="index"
            >
              <image class="has-key" :src="item.online | doorPic"></image>
              <text class="zone-name">{{ item.arae }}</text>
              <text class="building-name">{{ item.unit }}-{{ item.name }}</text>
            </view>
          </scroll-view>
          <view v-else class="default-addkey">
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
        { path: "../../static/assets/icons/btn-tip2x.png", name: "urgent" },
        { path: "../../static/assets/icons/btn-service.png", name: "service" },
      ],
      menuIcon: "../../static/assets/icons/btn-showmore.png",
      scanCodeIcon: "../../static/assets/icons/icon-scan.png",
      menuFlag: false,
    };
  },
  computed: {
    ...mapGetters(["token", "safeArea", "doorKeys"]),
    barHeight: function() {
      return this.safeArea && this.safeArea.top ? this.safeArea.top : 0;
    },
    scrollTop: function() {
      return this.menuFlag ? 0 : 18;
    },
  },
  onLoad() {
    if (this.token) {
      this._appinit();
    }
  },
  methods: {
    tapMenu: function() {
      this.menuFlag = !this.menuFlag;
    },
    tapOptionsHandler: function(name) {
      console.info(name);
      switch (name) {
        case "urgent":
          // 社区电话服务
          this.$Router.push({ name: "urgent" });
          break;
        case "service":
          // 平台人工服务
          uni.makePhoneCall({
            phoneNumber: "114",
          });
          break;
        case "my":
          // 个人中心
          this.$Router.push({ name: "control" });
          break;
      }
    },
    _appinit: async function() {
      this.$store.dispatch("app/getDoorKeys");
      this.$store.dispatch("user/getInfo");
    },
  },
  filters: {
    doorPic: function(online) {
      let keyOfflinePic = "../../static/assets/icons/btn-keyoffline.png";
      let openKeyPic = "../../static/assets/icons/btn-openkey.png";
      if (online) {
        return openKeyPic;
      } else {
        return keyOfflinePic;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* 最外层 */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
}
/* 背景层 */
.bg-pic {
  height: 100%;
  width: 100vw;
}
/* 应用层 */
.main {
  position: absolute;
  bottom: 0;
  height: 900rpx;
  width: 100%;
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
  overflow: hidden;
  margin-bottom: 100rpx;
  z-index: 9999;
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
  margin: 12rpx 0;
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
  width: inherit;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: calc(100% - 100rpx);
}
.keymainactive {
  height: 100%;
  border-top-left-radius: 50rpx;
  border-top-right-radius: 50rpx;
}

.scroll {
  width: 365rpx;
  height: 100%;
}
.default-addkey {
  width: 365rpx;
  height: 365rpx;
}
.list-keys {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.has-key {
  width: 365rpx;
  height: 365rpx;
}
.add-key {
  width: inherit;
  height: inherit;
}
.zone-name {
  font-size: 24rpx;
  font-weight: 400;
  color: rgba(150, 150, 150, 1);
  text-align: center;
}
.building-name {
  margin-top: 10rpx;
  font-size: 32rpx;
  font-weight: 500;
  color: rgba(62, 69, 82, 1);
  text-align: center;
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
