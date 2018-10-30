// skapa en scen, en kamera och en renderare
var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();  
// scala bilden till window-size och lägg till allt till dom:en
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement); 

// skapa en kub och ett material till kub
var geometry = new THREE.BoxGeometry(1,1,1); // x, y ,z
var material = new THREE.MeshBasicMaterial({
	color: 0x00ff00
})
// sammanfoga dessa i en mech som består av kuben och materialet
cube = new THREE.Mesh(geometry, material); 
// lägg till kuben till scenen
scene.add(cube); 
// sätt kamerans position 
camera.position.z = 5; 
camera.lookAt(new THREE.Vector3(0, 0, 0));
// rotera kuben och rendera scenen 
// rotera kuben och rendera scenen 
   renderer.render(scene, camera);
