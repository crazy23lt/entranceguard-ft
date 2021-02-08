<template>
  <view class="content">
    <router-link to="{name:apply}" navType="push">
      <button type="primary">使用name对象跳转</button>
    </router-link>
  </view>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ui-menu",
  created() {
    console.info(this.$router);
  },
  computed: {
    ...mapGetters(["permission_routes"]),
  },
};
</script>

<style lang="scss" scoped></style>
