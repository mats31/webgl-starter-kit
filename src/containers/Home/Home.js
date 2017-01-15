import WebglComponent from 'components/Webgl/Webgl';

import './home.styl';

import template from './home.html';

export default Vue.extend({

  template,

  data() {

    return {};
  },

  created() {

  },

  methods: {

  },

  components: {
    'webgl-component': WebglComponent,
  },
});
