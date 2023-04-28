<template>
  <div ref="container" class="three-container"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import * as THREE from "three";

export default {
  setup() {
    // 描画するDOMの指定
    const container = ref();

    // マウント時に初期化して描画
    onMounted(() => {
      init();
    });

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    const center = new THREE.Vector3(0, 0, 0);
    // camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const count = 1000;
    const positionArray = new Float32Array(count * 3);
    const randomArray = new Float32Array(count * 3);
    const scaleArray = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      positionArray[i3 + 0] = (Math.random() - 0.5) * 5;
      positionArray[i3 + 1] = (Math.random() - 0.5) * 5;
      positionArray[i3 + 2] = (Math.random() - 0.5) * 5;

      randomArray[i3 + 0] = (Math.random() - 0.5) * 5;
      randomArray[i3 + 1] = (Math.random() - 0.5) * 5;
      randomArray[i3 + 2] = (Math.random() - 0.5) * 5;

      scaleArray[i] = (Math.random() + 0.5) * 10;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positionArray, 3)
    );
    geometry.setAttribute(
      "aRandomness",
      new THREE.BufferAttribute(randomArray, 3)
    );
    geometry.setAttribute("aScale", new THREE.BufferAttribute(scaleArray, 1));
    const material = new THREE.ShaderMaterial({
      vertexShader: `
      uniform float uTime;
      attribute vec3 aRandomness;
      attribute float aScale;
      void main()
      {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);

          modelPosition.x += sin(position.y * uTime + aScale) * 0.1;
          modelPosition.z += cos(position.y * uTime + aScale) * 0.1;
          modelPosition.y += cos(position.z * uTime + aScale) * 0.1;

          modelPosition.xyz += aRandomness;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;
          
          gl_Position = projectedPosition;
          gl_PointSize = 10.0 * aScale;
          gl_PointSize *= (1.0 / - viewPosition.z);

      }
      `,
      fragmentShader: `
      void main()
      {
        float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
        float color = 0.05 / distanceToCenter - 0.1;
        gl_FragColor = vec4(1.0, 1.0, 1.0, color);
      }`,
      uniforms: {
        uTime: { value: 0 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);

    scene.add(points);

    const init = () => {
      container.value.appendChild(renderer.domElement);

      animate();
    };

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      material.uniforms.uTime.value = clock.getElapsedTime();
      camera.position.x = Math.sin(clock.getElapsedTime() * 0.05) * 2;
      camera.position.z = Math.cos(clock.getElapsedTime() * 0.05) * 2;
      camera.position.y = 1 - Math.cos(clock.getElapsedTime() * 0.1) * 2;
      camera.lookAt(center);

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
