<template>
  <view class="content" :style="{ paddingTop: barHeight + 'px' }">
    <view class="tap-title" @click="changeTap">
      <view
        data-index="help"
        :class="['tap', tapIndex === 'help' ? 'active' : '']"
        >求助电话</view
      >
      <view
        data-index="report"
        :class="['tap', tapIndex === 'report' ? 'active' : '']"
        >门禁报障</view
      >
      <view
        data-index="clues"
        :class="['tap', tapIndex === 'clues' ? 'active' : '']"
        >线索反馈</view
      >
    </view>
    <view
      class="swiper"
      :duration="0"
      :current="swiperCurrent"
      @change="changeCurrent"
    >
      <view class="swiper-item">
        <scroll-view scroll-y="true" class="scroll-view">
          <view v-for="(item, index) in reportPhones" :key="index">
            <view class="zone_name">{{ item.zone_name }}</view>
            <view
              class="calls"
              v-for="(Citem, Cindex) in item.calls"
              :key="Cindex"
            >
              <view class="call_name">{{ Citem.call_name }}</view>
              <view class="call_tel">{{ Citem.call_tel }}</view>
            </view>
          </view>
        </scroll-view>
      </view>
      <view class="swiper-item">
        <view class="swiper-item">B</view>
      </view>
      <view class="swiper-item">
        <view class="swiper-item">C</view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      tapIndex: "help",
      swiperCurrent: 0,
    };
  },
  created() {
    this.getReportPhone()
      .then((res) => {
        console.info("获取电话陈宫");
      })
      .catch((error) => console.error(error));
  },
  computed: {
    ...mapGetters(["safeArea", "reportPhones"]),
    barHeight: function() {
      return this.safeArea && this.safeArea.top ? this.safeArea.top : 0;
    },
  },
  methods: {
    ...mapActions({
      getReportPhone: "urgent/getReportPhone",
    }),
    changeTap: function(e) {
      let index = e.target.dataset.index;
      switch (index) {
        case "report":
          this.tapIndex = "report";
          this.swiperCurrent = 1;
          break;
        case "clues":
          this.tapIndex = "clues";
          this.swiperCurrent = 2;
          break;
        case "help":
          this.tapIndex = "help";
          this.swiperCurrent = 0;
          break;
        default:
          break;
      }
    },
    changeCurrent: function({ detail }) {
      switch (detail.current) {
        case 0:
          this.tapIndex = "help";
          break;
        case 1:
          this.tapIndex = "report";
          break;
        case 2:
          this.tapIndex = "clues";
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .tap-title {
    width: inherit;
    @include flex(around, center, row);
    height: 88rpx;
    .tap {
      width: 100%;
      height: 100%;
      line-height: 88rpx;
      text-align: center;
      border-bottom: 6rpx solid transparent;
      transition: all 0.3s ease-in-out;
      &.active {
        color: #0088f1;
        border-bottom-color: #0088f1;
      }
    }
  }
  .swiper {
    height: calc(100% - 88rpx);
    width: 300%;
    @include flex(around, center, row);
    .swiper-item {
      width: calc(100% / 3);
      .scroll-view {
        height: 100%;
      }
    }
  }
}
</style>
