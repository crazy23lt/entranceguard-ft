<template>
  <view class="content">
    <view class="menulist mb50" v-for="item in routes" :key="item.meta.order">
      <image
        class="icon"
        :src="item.meta.icon | iconPipe"
        @error="imageError"
      ></image>
      <router-link class="link ml20" :to="{ name: item.name }" navType="push">{{
        item.meta.title
      }}</router-link>
    </view>
    <view class="menulist mb50" v-for="item in baseMenu" :key="item.icon">
      <image
        class="icon"
        :src="item.icon | iconPipe"
        @error="imageError"
      ></image>
      <text class="link ml20" @click="_handlerBaseClick(item.icon)">{{
        item.title
      }}</text>
    </view>
  </view>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ui-menu",
  created() {},
  mounted() {},
  data() {
    return {
      baseMenu: [
        { icon: "service", title: "联系客服" },
        { icon: "exit", title: "退出登录" },
      ],
    };
  },
  computed: {
    ...mapGetters(["permission_routes"]),
    routes: {
      get: function() {
        return this.permission_routes;
      },
      set: function() {},
    },
  },
  methods: {
    imageError: function() {},
    _handlerBaseClick: function(icon) {
      switch (icon) {
        case "service":
          this.$emit("service");
          break;
        case "exit":
          this.$emit("exit");
          break;
        default:
          console.error("no handler");
          break;
      }
    },
  },
  filters: {
    iconPipe: function(iconName) {
      let src = "";
      switch (iconName) {
        case "key":
          src = "../../static/assets/icons/icon-my-key.png";
          break;
        case "urgent":
          src = "../../static/assets/icons/icon-my-urgent.png";
          break;
        case "setting":
          src = "../../static/assets/icons/icon-my-setting.png";
          break;
        case "house":
          src = "../../static/assets/icons/icon-my-room.png";
          break;
        case "population":
          src = "../../static/assets/icons/icon-my-population.png";
          break;
        case "exit":
          src = "../../static/assets/icons/icon-my-exit.png";
          break;
        case "service":
          src = "../../static/assets/icons/icon-my-service.png";
          break;
        default:
          src = "../../static/assets/icons/icon-my-exit.png";
          break;
      }
      return src;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  .menulist {
    @include flex(start, center, row);
    .icon {
      width: 40rpx;
      height: 40rpx;
    }
    .link {
      font-size: 32rpx;
      font-weight: 400;
      color: rgba(62, 69, 82, 1);
    }
  }
}
</style>
