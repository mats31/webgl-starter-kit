import Signal from 'min-signal';

class Signals {

  constructor() {

    this.onAssetLoaded = new Signal();
    this.onAssetsLoaded = new Signal();
  }
}

window.Signals = new Signals();

export default window.Signals;
