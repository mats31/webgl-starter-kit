import './loader.styl';

import template from './loader.html';

export default Vue.extend({

  template,

  data() {

    return {};
  },

  created() {

    Signals.onAssetLoaded.add(this.onAssetLoaded);
    Signals.onAssetsLoaded.add(this.onAssetsLoaded);
  },

  mounted() {

    this.setPercentLoading(0);
  },

  methods: {

    setPercentLoading(value) {
      this.$refs.progress.innerHTML = value;
    },

    /* Events */

    onAssetLoaded(percent) {
      this.setPercentLoading(percent);
    },

    onAssetsLoaded() {
      TweenLite.to(
        this.$refs.container,
        1,
        {
          delay: 0.2,
          display: 'none',
          opacity: 0,
          ease: 'Power2.easeOut',
        },
      );
    },
  },

  components: {},
});
