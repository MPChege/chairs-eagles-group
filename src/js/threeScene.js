import * as THREE from 'three';

let scene, camera, renderer, badge;
let animationId;

export function initThreeScene() {
  const container = document.getElementById('three-container');
  if (!container) return;

  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Create floating badge/shield
  const geometry = new THREE.OctahedronGeometry(1, 0);
  const material = new THREE.MeshStandardMaterial({
    color: 0xC00000,
    metalness: 0.8,
    roughness: 0.2,
    emissive: 0x0033AA,
    emissiveIntensity: 0.3
  });
  badge = new THREE.Mesh(geometry, material);
  scene.add(badge);

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0xC00000, 1, 100);
  pointLight1.position.set(5, 5, 5);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0x0033AA, 1, 100);
  pointLight2.position.set(-5, -5, 5);
  scene.add(pointLight2);

  // Animation
  function animate() {
    animationId = requestAnimationFrame(animate);

    if (badge) {
      badge.rotation.x += 0.005;
      badge.rotation.y += 0.01;
      badge.position.y = Math.sin(Date.now() * 0.001) * 0.3;
    }

    renderer.render(scene, camera);
  }

  animate();

  // Handle resize
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener('resize', onWindowResize);

  // Cleanup
  window.addEventListener('beforeunload', () => {
    if (animationId) cancelAnimationFrame(animationId);
    if (renderer) renderer.dispose();
  });
}

