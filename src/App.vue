<script>
export default {
  onLaunch: function() {
    console.log("App Launch");
    this.$store.dispatch("app/getSafeArea");
    // #ifdef APP-PLUS
    // #endif
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
page {
  height: 100%;
}
</style>
