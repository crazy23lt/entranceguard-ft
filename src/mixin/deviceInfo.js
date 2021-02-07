import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["safeArea"]),
        barHeight: function () {
            return this.safeArea && this.safeArea.top ? this.safeArea.top : 0;
        },
    },
};