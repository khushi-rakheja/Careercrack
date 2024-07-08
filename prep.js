const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true, 
    // Additional options for customization: https://github.com/locomotivemtl/locomotive-scroll
});

const glassCard = document.querySelector('.glass-card');

// Initialize Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a DirectionalLight for the glare
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 0, 1);
scene.add(light);

// Add a transparent plane below the glass card
const planeGeometry = new THREE.PlaneGeometry(5, 5, 32);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0x000000,
  transparent: true,
  opacity: 0.5,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// Camera position and animation
camera.position.z = 8;
camera.position.y = 2;
const tl = gsap.timeline();
tl.to(camera.position, { y: 4, duration: 2, ease: 'power3.out' });

// Render loop.
const animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
animate();

// Resize event listener
function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onResize);