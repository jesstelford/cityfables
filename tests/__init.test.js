/* global sinon, setup, teardown */

/**
 * __init.test.js is run before every test case.
 */
window.debug = true;

var AScene = require('aframe-core').AScene;

beforeEach(function () {
  this.sinon = sinon.sandbox.create();
  // Stub to not create a WebGL context since Travis CI runs headless.
  this.sinon.stub(AScene.prototype, 'attachedCallback');
});

afterEach(function () {
  // Clean up any attached elements.
  ['a-assets', 'ar-scene'].forEach(function (tagName) {
    var els = document.querySelectorAll(tagName);
    for (var i = 0; i < els.length; i++) {
      els[i].parentNode.removeChild(els[i]);
    }
  });
  AScene.scene = null;

  this.sinon.restore();
});
