import * as THREE from 'three';
import {OrbitControls} from 'orbitControls';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x00bbbb);
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer();   
renderer.setSize( window.innerWidth*0.75, window.innerHeight*0.75, false);
let div = document.getElementById("container");
div.appendChild(renderer.domElement);

// object (kubus)
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00dd00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// // let there be light
// const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
// scene.add( directionalLight );

// control
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

// const gui = new dat.GUI();

function animate() {
	requestAnimationFrame( animate );
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // cube.rotation.z += 0.01;
    controls.update();
    renderer.render(scene, camera);
}
animate();

