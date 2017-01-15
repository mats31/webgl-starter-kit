import States from 'core/States';
import OrbitControls from 'helpers/OrbitControls'
import raf from 'raf';

import Clock from 'helpers/Clock';

import Cube from './Meshes/Cube/Cube';

import './webgl.styl';


import template from './webgl.html';

export default Vue.extend({

  template,

  data() {

    return {};
  },

  created() {

    this.setup();

    Signals.onAssetsLoaded.add(this.onAssetsLoaded);
  },

  mounted() {

    this.renderer.domElement.style.position = 'absolute';
    this.$refs.container.appendChild(this.renderer.domElement);
  },

  methods: {

    setup() {

      this.mouse = new THREE.Vector2();

      this.createWebgl(window.innerWidth, window.innerHeight);
      // this.setupEvent();
    },

    createWebgl(width, height) {

      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000);
      this.camera.position.z = -50;
      // this.camera.lookAt(new THREE.Vector3());

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height);
      this.renderer.setClearColor(0xffffff);
      this.renderer.antialias = true;

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    },

    setupEvent() {

      this.renderer.domElement.addEventListener('mousemove', this.onMousemove.bind(this));
    },

    setupCube() {

      this.cube = new Cube();
      this.scene.add(this.cube);
    },

    /* Events */

    onAssetsLoaded() {

      this.clock = new Clock();

      this.setupCube();
      this.animate();
    },

    onMousemove(event) {

      // this.mouse.x = ( ( event.clientX / window.innerWidth ) * 2 ) - 1;
      // this.mouse.y = ( -( event.clientY / window.innerHeight ) * 2 ) + 1;

      this.mouse.x = event.clientX - (window.innerWidth * 0.5);
      this.mouse.y = event.clientY - (window.innerHeight * 0.5);
    },

    /* Update */

    animate() {

      raf(this.animate);

      this.cube.update( this.clock.time );

      this.renderer.render(this.scene, this.camera);
    },
  },

  components: {},
});
