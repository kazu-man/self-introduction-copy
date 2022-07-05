<template>
  <div ref="container" class="three-container"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default {
  setup() {
    // 描画するDOMの指定
    const container = ref();

    // マウント時に初期化して描画
    onMounted(() => {
      init();
    });

    const scene = new THREE.Scene();
    // const axesHelper = new THREE.AxesHelper(1000);
    // scene.add(axesHelper);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.set(50, 50, 50);
    // camera.lookAt({ x: 0, y: 0, z: 0 });

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const group = new THREE.Group();
    // グループを作る
    // 3D空間にグループを追加する
    scene.add(group);
    const addMeshToGroup = () => {
      const material = new THREE.MeshBasicMaterial({ color: "#ffffff" });
      material.transparent = true;
      material.opacity = 0.6;
      const geometry = new THREE.SphereGeometry(1, 30, 30);
      const mesh = new THREE.Mesh(geometry, material);
      // 配置座標を計算
      const xPosition = (Math.random() - 0.5) * 100;
      const yPosition = (Math.random() - 0.5) * 100;
      const zPosition = (Math.random() - 0.5) * 100;
      if (
        !(
          Math.abs(xPosition) < 20 &&
          Math.abs(yPosition) < 20 &&
          Math.abs(zPosition) < 20
        )
      ) {
        mesh.position.set(xPosition, yPosition, zPosition);

        // グループに追加する
        group.add(mesh);
      }
    };
    const count = 50;
    for (let i = 0; i < count; i++) {
      // 球体を作成
      addMeshToGroup();
    }
    let controls = null;
    const init = () => {
      container.value.appendChild(renderer.domElement);
      controls = new OrbitControls(camera, renderer.domElement);

      scene.add(group);

      camera.position.z = 20;

      animate();
    };
    let rot = 0;
    const timer = setInterval(addMeshToGroup, 2000);

    const animate = () => {
      requestAnimationFrame(animate);
      // 毎フレーム角度を足していく
      rot += 1;

      // // ラジアンに変換する
      const radian = (rot * Math.PI) / 180;
      if (group.children.length > 100) {
        clearInterval(timer);
      }

      controls.update();
      // // 角度に応じてカメラの位置を設定
      camera.position.x = 50 * Math.sin(radian);
      camera.position.y = 50 * Math.sin(radian);
      camera.position.z = -50 * Math.cos(radian);

      renderer.render(scene, camera);
    };

    return {
      container,
    };
  },
};
</script>
<style>
.three-container {
  position: absolute;
  z-index: -1;
}
</style>
