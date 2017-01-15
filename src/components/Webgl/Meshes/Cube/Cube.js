import States from 'core/States';

import vertexShader from './shaders/cube.vs';
import fragmentShader from './shaders/cube.fs';

class Cube extends THREE.Object3D {

  constructor() {

    super();

    const map = States.resources.getTexture('uv').media;
    map.needsUpdate = true;
    map.LinearFilter = THREE.LinearFilter;

    this.geometry = new THREE.BoxGeometry( 10, 10, 10, 10, 10);

    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_time: { type: 'f', value: new THREE.Texture() },
        map: { type: 't', value: map },
      },
      wireframe: false,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.add(this.mesh);

    Signals.onAssetsLoaded.add(this.onAssetsLoaded.bind(this));

    // this.addGUI()
  }

  onAssetsLoaded() {

    const texture = States.resources.getTexture('uv').media;
    texture.needsUpdate = true;
    texture.minFilter = THREE.LinearFilter;

    this.material.uniforms.map.value = texture;
  }

  update(time) {

    this.material.uniforms.u_time.value = time;
  }

  // addGUI() {
  //   this.GUI = helpers.GUI
  //   const positionFolder = this.GUI.addFolder({ label: 'Cube Position' })
  //   const scaleFolder = this.GUI.addFolder({ label: 'Cube Scale' })
  //
  //   positionFolder.add(this.position, 'x', { label: 'position x', min: -20, max: 20, step: 1 })
  //   positionFolder.add(this.position, 'y', { label: 'position y', min: -20, max: 20, step: 1 })
  //   positionFolder.add(this.position, 'z', { label: 'position z', min: -20, max: 20, step: 1 })
  //
  //   scaleFolder.add(this.scale, 'x', { label: 'scale x', min: 0, max: 10, step: 0.1 })
  //   scaleFolder.add(this.scale, 'y', { label: 'scale y', min: 0, max: 10, step: 0.1 })
  //   scaleFolder.add(this.scale, 'z', { label: 'scale z', min: 0, max: 10, step: 0.1 })
  // }
}

export default Cube;
