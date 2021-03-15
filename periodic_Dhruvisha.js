import * as THREE from '/build/three.module.js';
import {
  OrbitControls
} from '/jsm/controls/OrbitControls.js';

let scene, camera, renderer, cube;
var sphere, e1, e2, e3, e4, e5, e6, revolution_e1, revolution_e2, revolution_e3, revolution_e4, revolution_e5;

scene = new THREE.Scene()

camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

renderer = new THREE.WebGLRenderer({
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

let controls = new OrbitControls(camera, renderer.domElement);

// Hydrogen
const geometry1 = new THREE.BoxGeometry(5, 5, 5);
let texture1 = new THREE.TextureLoader().load('hydrogen.jpg');
const material1 = new THREE.MeshBasicMaterial({
  map: texture1
});
material1.side = THREE.DoubleSide;
var hydrogen = new THREE.Mesh(geometry1, material1);
hydrogen.position.set(-50, 20, 0);
scene.add(hydrogen);

//Helium
const geometry2 = new THREE.BoxGeometry(5, 5, 5);
let texture2 = new THREE.TextureLoader().load('helium.jpg');
const material2 = new THREE.MeshBasicMaterial({
  map: texture2
});
material2.side = THREE.DoubleSide;
var helium = new THREE.Mesh(geometry2, material2);
helium.position.set(-50, 15, 0);
scene.add(helium);

//lithium
const geometry3 = new THREE.BoxGeometry(5, 5, 5);
let texture3 = new THREE.TextureLoader().load('lithium.jpg');
const material3 = new THREE.MeshBasicMaterial({
  map: texture3
});
material3.side = THREE.DoubleSide;
var lithium = new THREE.Mesh(geometry3, material3);
lithium.position.set(-50, 10, 0);
scene.add(lithium);

//beryllium
const geometry4 = new THREE.BoxGeometry(5, 5, 5);
let texture4 = new THREE.TextureLoader().load('beryllium.jpg');
const material4 = new THREE.MeshBasicMaterial({
  map: texture4
});
material4.side = THREE.DoubleSide;
var beryllium = new THREE.Mesh(geometry4, material4);
beryllium.position.set(-50, 5, 0);
scene.add(beryllium);

//boron
const geometry5 = new THREE.BoxGeometry(5, 5, 5);
let texture5 = new THREE.TextureLoader().load('boron.jpg');
const material5 = new THREE.MeshBasicMaterial({
  map: texture5
});
material2.side = THREE.DoubleSide;
var boron = new THREE.Mesh(geometry5, material5);
boron.position.set(-50, 0, 0);
scene.add(boron);

//Atom
const geometry = new THREE.SphereGeometry(3, 16, 16);
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  wireframe: true
});
sphere = new THREE.Mesh(geometry, material);
//Electron1
const geometry6 = new THREE.SphereGeometry(1, 10, 10);
const material6 = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true
});
e1 = new THREE.Mesh(geometry6, material6);
e1.position.set(10, 0, 0);
//Electron2
const geometry7 = new THREE.SphereGeometry(1, 10, 10);
const material7 = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true
});
e2 = new THREE.Mesh(geometry7, material7);
e2.position.set(-15, 0, 0);
//Electron3
const geometry8 = new THREE.SphereGeometry(1, 10, 10);
const material8 = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true
});
e3 = new THREE.Mesh(geometry8, material8);
e3.position.set(25, 0, 0);
//Electron4
const geometry9 = new THREE.SphereGeometry(1, 10, 10);
const material9 = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true
});
e4 = new THREE.Mesh(geometry9, material9);
e4.position.set(-25, 0, 0);
//Electron5
const geometry10 = new THREE.SphereGeometry(1, 10, 10);
const material10 = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true
});
e5 = new THREE.Mesh(geometry10, material10);
e5.position.set(25, 0, 0);

//Revolutions

var theta_e1 = 0;
var theta = 0;
revolution_e1 = function(radius, delta, name) {
  var diff = 2 * Math.PI / delta;
  name.position.x = radius * Math.cos(theta_e1)
  name.position.z = radius * Math.sin(theta_e1);

  theta_e1 += diff;
}

var theta_e2 = 0;
revolution_e2 = function(radius, delta, name) {
  var diff = 2 * Math.PI / delta;
  name.position.x = radius * Math.cos(theta_e2)
  name.position.z = radius * Math.sin(theta_e2);

  theta_e2 += diff;
}

var theta_e3 = 0;
revolution_e3 = function(radius, delta, name) {
  var diff = 2 * Math.PI / delta;
  name.position.x = radius * Math.cos(theta_e3)
  name.position.z = radius * Math.sin(theta_e3);

  theta_e3 += diff;
}

var theta_e4 = 0;
revolution_e4 = function(radius, delta, name) {
  var diff = 2 * Math.PI / delta;
  name.position.x = radius * Math.cos(theta_e4)
  name.position.z = radius * Math.sin(theta_e4);

  theta_e4 += diff;
}

var theta_e5 = 0;
revolution_e5 = function(radius, delta, name) {
  var diff = 2 * Math.PI / delta;
  name.position.x = radius * Math.cos(theta_e5)
  name.position.z = radius * Math.sin(theta_e5);

  theta_e5 += diff;
}

camera.position.z = 45;


function boron_model() {
  scene.clear();
  scene.add(hydrogen);
  scene.add(helium);
  scene.add(lithium);
  scene.add(beryllium);
  scene.add(boron);
  // Atom
  scene.add(sphere);
  // Electron1
  scene.add(e1);
  // Electron 2
  scene.add(e2);
  // Electron 3
  scene.add(e3);
  // Electron 4
  scene.add(e4);
  // Electron 5
  scene.add(e5);
  var orbits = function(name, radius, delta) {
    var theta = 0;
    var diff = 2 * Math.PI / delta;
    var material_o = new THREE.LineBasicMaterial();
    var geometry_o = new THREE.Geometry();
    for (theta; theta <= 2 * Math.PI; theta += diff) {
      geometry_o.vertices.push(new THREE.Vector3(radius * Math.cos(theta), 0, radius * Math.sin(theta)));
    }
    var orbit = new THREE.Line(geometry_o, material_o);
    scene.add(orbit);
  }

  orbits(e1, 15, 1000);
  orbits(e3, 25, 1000);
  
} //function

function beryllium_model() {
  scene.clear();
  scene.add(hydrogen);
  scene.add(helium);
  scene.add(lithium);
  scene.add(beryllium);
  scene.add(boron);

  // Atom
  scene.add(sphere);
  // Electron1
  scene.add(e1);
  // Electron 2
  scene.add(e2);
  // Electron 3
  scene.add(e3);
  // Electron 4
  scene.add(e4);
  
  var orbits = function(name, radius, delta) {
    var theta = 0;
    var diff = 2 * Math.PI / delta;
    var material_o = new THREE.LineBasicMaterial();
    var geometry_o = new THREE.Geometry();
    for (theta; theta <= 2 * Math.PI; theta += diff) {
      geometry_o.vertices.push(new THREE.Vector3(radius * Math.cos(theta), 0, radius * Math.sin(theta)));
    }
    var orbit = new THREE.Line(geometry_o, material_o);
    scene.add(orbit);
  }

  orbits(e1, 15, 1000);
  orbits(e3, 25, 1000);
  
} //function

function lithium_model() {
  scene.clear();
  scene.add(hydrogen);
  scene.add(helium);
  scene.add(lithium);
  scene.add(beryllium);
  scene.add(boron);
  // Atom
  scene.add(sphere);
  // Electron1
  scene.add(e1);
  // Electron 2
  scene.add(e2);
  // Electron 3
  scene.add(e3);
  
  var orbits = function(name, radius, delta) {
    var theta = 0;
    var diff = 2 * Math.PI / delta;
    var material_o = new THREE.LineBasicMaterial();
    var geometry_o = new THREE.Geometry();
    for (theta; theta <= 2 * Math.PI; theta += diff) {
      geometry_o.vertices.push(new THREE.Vector3(radius * Math.cos(theta), 0, radius * Math.sin(theta)));
    }
    var orbit = new THREE.Line(geometry_o, material_o);
    scene.add(orbit);
  }

  orbits(e1, 15, 1000);
  orbits(e3, 25, 1000);
  
} //function

function helium_model() {
  scene.clear();
  scene.add(hydrogen);
  scene.add(helium);
  scene.add(lithium);
  scene.add(beryllium);
  scene.add(boron);
  // Atom
  scene.add(sphere);
  // Electron1
  scene.add(e1);
  // Electron 2
  scene.add(e2);
  
  var orbits = function(name, radius, delta) {
    var theta = 0;
    var diff = 2 * Math.PI / delta;
    var material_o = new THREE.LineBasicMaterial();
    var geometry_o = new THREE.Geometry();
    for (theta; theta <= 2 * Math.PI; theta += diff) {
      geometry_o.vertices.push(new THREE.Vector3(radius * Math.cos(theta), 0, radius * Math.sin(theta)));
    }
    var orbit = new THREE.Line(geometry_o, material_o);
    scene.add(orbit);
  }

  orbits(e1, 15, 1000);
  
} //function

function hydrogen_model() {
  scene.clear();
  scene.add(hydrogen);
  scene.add(helium);
  scene.add(lithium);
  scene.add(beryllium);
  scene.add(boron);
  // Atom
  scene.add(sphere);
  // Electron1
  scene.add(e1);
  
  var orbits = function(name, radius, delta) {
    var theta = 0;
    var diff = 2 * Math.PI / delta;
    var material_o = new THREE.LineBasicMaterial();
    var geometry_o = new THREE.Geometry();
    for (theta; theta <= 2 * Math.PI; theta += diff) {
      geometry_o.vertices.push(new THREE.Vector3(radius * Math.cos(theta), 0, radius * Math.sin(theta)));
    }
    var orbit = new THREE.Line(geometry_o, material_o);
    scene.add(orbit);
  }

  orbits(e1, 15, 1000);

} //function

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove(event) {

  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

}
window.addEventListener('click', onMouseMove, false);

// document.addEventListener("keydown", function(event) {
//       if(event.keyCode === 27){
//          //Esc key was pressed
//           console.log('esc working');
//           earth_flag=0;
          
//           document.getElementById('hydrogen_text').style.display = 'none';
                  
//      }

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.01;
  e1.rotation.y += 0.01;
  e2.rotation.y += 0.01;
  e3.rotation.y += 0.01;
  e4.rotation.y += 0.01;
  e5.rotation.y += 0.01;
  revolution_e1(15, 2000, e1);
  revolution_e2(15, 1500, e2);
  revolution_e3(25, 2000, e3);
  revolution_e4(25, 1200, e4);
  revolution_e5(25, 1500, e5);
  
  raycaster.setFromCamera(mouse, camera);

  // calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects(scene.children);
  // console.log(intersects);
  if (intersects[0]){
   if (intersects[0].object.geometry.id == '2') {
     console.log('Hydrogen');
     hydrogen_model();
     document.getElementById('hydrogen_text').style.display = 'block';
     document.getElementById('helium_text').style.display = 'none';
     document.getElementById('lithium_text').style.display = 'none';
     document.getElementById('beryllium_text').style.display = 'none';
     document.getElementById('boron_text').style.display = 'none';
   }
   else if (intersects[0].object.geometry.id == '4') {
     console.log('helium');
     helium_model();
     document.getElementById('hydrogen_text').style.display = 'none';
     document.getElementById('helium_text').style.display = 'block';
     document.getElementById('lithium_text').style.display = 'none';
     document.getElementById('beryllium_text').style.display = 'none';
     document.getElementById('boron_text').style.display = 'none';
   }
   else if (intersects[0].object.geometry.id == '6') {
     console.log('lithium');
     lithium_model();
     document.getElementById('hydrogen_text').style.display = 'none';
     document.getElementById('helium_text').style.display = 'none';
     document.getElementById('lithium_text').style.display = 'block';
     document.getElementById('beryllium_text').style.display = 'none';
     document.getElementById('boron_text').style.display = 'none';
   }
   else if (intersects[0].object.geometry.id == '8') {
     console.log('beryllium');
     beryllium_model();
     document.getElementById('hydrogen_text').style.display = 'none';
     document.getElementById('helium_text').style.display = 'none';
     document.getElementById('lithium_text').style.display = 'none';
     document.getElementById('beryllium_text').style.display = 'block';
     document.getElementById('boron_text').style.display = 'none';
   }
   else if (intersects[0].object.geometry.id == '10') {
     console.log('beryllium');
     boron_model();
     document.getElementById('hydrogen_text').style.display = 'none';
     document.getElementById('helium_text').style.display = 'none';
     document.getElementById('lithium_text').style.display = 'none';
     document.getElementById('beryllium_text').style.display = 'none';
     document.getElementById('boron_text').style.display = 'block';
   }
   else {
     controls.update();
   }

 }

  
  renderer.render(scene, camera);

}

window.addEventListener('click', onMouseMove, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

animate();
