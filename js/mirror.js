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
        distance: { type: 'number', default: 100000 },
        interval: { type: 'number', default: 1000 },
        repeat: { type: 'boolean', default: false }
    },
    multiple: false,
    init: function () {
        this.counter = this.data.interval;
        this.cam = new THREE.CubeCamera(1, this.data.distance, this.data.resolution);
        console.log(this.el);
        console.log(AFRAME.scenes[0].camera);
        this.el.object3D.add(this.cam);
        this.mirrorMaterial = new THREE.MeshPhongMaterial({ color: this.data.color, envMap: this.cam.renderTarget.texture });
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
                    AFRAME.scenes[0].renderer.autoClear = true;
                    this.cam.position.copy(this.el.object3D.worldToLocal(this.el.object3D.getWorldPosition()));
                    this.cam.updateCubeMap(AFRAME.scenes[0].renderer, this.el.sceneEl.object3D);

                    var mirrormat = this.mirrorMaterial;
                    this.mesh.traverse(function (child) {
                        if (child instanceof THREE.Mesh) child.material = mirrormat;
                    });
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