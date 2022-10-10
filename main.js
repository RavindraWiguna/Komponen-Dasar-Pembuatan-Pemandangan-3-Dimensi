import * as THREE from "three";
import { OrbitControls } from "orbitControls";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x00bbbb);
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight, false);
let div = document.getElementById("container");
div.appendChild(renderer.domElement);

// object (kubus)
const geometry = new THREE.BoxGeometry(1, 1, 1);
// ini warna constant
// const material = new THREE.MeshBasicMaterial( { color: 0x00dd00 } );
// ini tidacc, react with light
const material = new THREE.MeshStandardMaterial({ color: "#8AC" });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// let there be light
const color = 0xffffff;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(0, 10, 0);
light.target.position.set(-5, 0, 0);
scene.add(light);
scene.add(light.target);
// control
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// const gui = new dat.GUI();
let freeze = false;
window.addEventListener("mousedown", freezeit);
function freezeit() {
  freeze = true;
}

window.addEventListener("mouseup", unfreezeit);
function unfreezeit() {
  freeze = false;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

function animate() {
  requestAnimationFrame(animate);
  if (!freeze) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
  // cube.rotation.z += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

animate();
