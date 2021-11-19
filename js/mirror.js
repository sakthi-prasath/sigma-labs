// AFRAME.registerComponent("mirror", {
//     init: function () {
//         var mirrorObj = this.el.getOrCreateObject3D("mesh", THREE.Mesh);
//         this.renderer = scene.renderer;
//         var geometry = new THREE.PlaneBufferGeometry(70, 70);
//         var verticalMirror = new THREE.Reflector(geometry, {
//             clipBias: 0.003,
//             textureWidth: 1000,
//             textureHeight: 1000,
//             color: 0x777777,
//         });
//         verticalMirror.position.y = 0;
//         verticalMirror.position.z = 0;
//         mirrorObj.add(verticalMirror);
//     },
// });
// AFRAME.registerComponent("mirror", {
//     init: function () {
//         console.log(this.el.getObject3D("mesh"));
//         var mirrorObj = this.el.getOrCreateObject3D("mesh", THREE.Mesh);
//         this.renderer = scene.renderer;
//         var geometry = new THREE.PlaneBufferGeometry(700, 700);
//         var verticalMirror = new THREE.Mirror(geometry, {
//             clipBias: 0.003,
//             textureWidth: 1000,
//             textureHeight: 1000,
//             color: 0x777777,
//         });
//         verticalMirror.position.y = 0;
//         verticalMirror.position.z = 0;
//         mirrorObj.add(verticalMirror);
//         this.el.object3D.add(verticalMirror);
//     },
// });

/* global AFRAME */

if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('mirror', {
    schema: {
        resolution: { type: 'number', default: 1000 },
        refraction: { type: 'number', default: 0.95 },
        color: { type: 'color', default: 0xffffff },
        distance: { type: 'number', default: 10 },
        interval: { type: 'number', default: 1000 },
        repeat: { type: 'boolean', default: true }
    },
    multiple: false,
    init: function () {
        this.counter = this.data.interval;
        this.cam = new THREE.CubeCamera(0.001, this.data.distance, this.data.resolution);
        console.log(this.el);
        console.log(AFRAME.scenes[0].camera);
        this.cam.position.set(0, 0, 0);
        this.el.object3D.add(this.cam);
        this.mirrorMaterial = new THREE.MeshPhongMaterial({ color: this.data.color, envMap: this.cam.renderTarget });
        this.done = false;
        var mirrormat = this.mirrorMaterial;
        this.mesh = this.el.getObject3D('mesh');
        if (this.mesh) {
            this.mesh.traverse(function (child) {
                if (child instanceof THREE.Mesh) child.material = mirrormat;
            });
        }
    },

    tick: function (t, dt) {
        if (!this.done) {
            if (this.counter > 0) {
                this.counter -= dt;
            } else {
                this.mesh = this.el.getObject3D('mesh');

                if (this.mesh) {
                    this.mesh.visible = false;
                    var position = document.getElementById('player').getAttribute('position');
                    AFRAME.scenes[0].renderer.autoClear = true;
                    var localPosition = this.el.object3D.worldToLocal(new THREE.Vector3(position['x'], position['y'], position['z']));
                    this.cam.position.set(localPosition.x, localPosition.y, -localPosition.z / 100 + 3);
                    this.cam.updateCubeMap(AFRAME.scenes[0].renderer, this.el.sceneEl.object3D);
                    this.mirrorMaterial.envMap = this.cam.renderTarget;

                    this.mesh.material = this.mirrorMaterial;
                    this.mesh.visible = true;

                    if (!this.data.repeat) {
                        this.done = true;
                        this.counter = this.data.interval;
                    }
                }
            }
        }
    },
    update: function (oldData) { },
    remove: function () { },
    pause: function () { },
    play: function () { }
});