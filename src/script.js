import './style.css'
import * as THREE from 'three'
// import { OBJLoader } from './OBJLoader.js';
// import { OBJLoader } from 'three/src/loaders/ObjectLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// import * as THREE from '../build/three.module.js';
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

// 
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader.js';
import { LoadingManager } from 'three/build/three.module';


//
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Render .obj file
/*
// // Sizes
const sizes = {
	width: 800,
	height: 600
}
			
// Cursor
const cursor = {
	x: 0,
	y: 0
}

window.addEventListener('mousemove', (event) =>
{
	cursor.x = event.clientX / sizes.width - 0.5
	cursor.y = - (event.clientY / sizes.height - 0.5)
})



			let camera, scene, renderer;

			let mouseX = 0, mouseY = 0;

			let windowHalfX = window.innerWidth / 2;
			let windowHalfY = window.innerHeight / 2;


			init();
			animate();


			function init() {

				const container = document.createElement( 'div' );
				document.body.appendChild( container );

				// camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
				camera.position.z = 250;

				// scene

				scene = new THREE.Scene();

				const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
				scene.add( ambientLight );

				const pointLight = new THREE.PointLight( 0xffffff, 0.8 );
				camera.add( pointLight );
				scene.add( camera );

				// model

				const onProgress = function ( xhr ) {

					if ( xhr.lengthComputable ) {

						const percentComplete = xhr.loaded / xhr.total * 100;
						console.log( Math.round( percentComplete, 2 ) + '% downloaded' );

					}

				};

				const onError = function () { };

				const manager = new THREE.LoadingManager();
				manager.addHandler( /\.dds$/i, new DDSLoader() );

				// comment in the following line and import TGALoader if your asset uses TGA textures
				// manager.addHandler( /\.tga$/i, new TGALoader() );

				new MTLLoader( manager )
					.setPath( '../textures/' )
					.load( 'House.mtl', function ( materials ) {

						materials.preload();

						new OBJLoader( manager )
							.setMaterials( materials )
							.setPath( '../textures/' )
							.load( 'House.obj', function ( object ) {

								object.position.y = 0;
								scene.add( object );

							}, onProgress, onError );

					} );

				//

				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

				document.addEventListener( 'mousemove', onDocumentMouseMove );

				//

				window.addEventListener( 'resize', onWindowResize );



// Controls
const controls = new OrbitControls(camera, container)
// controls.target.y = 2
controls.enableDamping = true
// Animate
const clock = new THREE.Clock()
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

				tick()

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - windowHalfX ) / 2;
				mouseY = ( event.clientY - windowHalfY ) / 2;

			}

			//

			function animate() {

				requestAnimationFrame( animate );
				render();

			}

			function render() {

				// camera.position.x += ( mouseX - camera.position.x ) * .05;
				// camera.position.y += ( - mouseY - camera.position.y ) * .05;

				camera.lookAt( scene.position );

				renderer.render( scene, camera );

			}
*/




























// Render .fbx file
/*
			let camera, scene, renderer, stats;

			const clock = new THREE.Clock();

			let mixer;

			init();
			animate();

			function init() {

				const container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
				camera.position.set( 100, 200, 300 );

				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xa0a0a0 );
				scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );

				const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
				hemiLight.position.set( 0, 200, 0 );
				scene.add( hemiLight );

				const dirLight = new THREE.DirectionalLight( 0xffffff );
				dirLight.position.set( 0, 200, 100 );
				dirLight.castShadow = true;
				dirLight.shadow.camera.top = 180;
				dirLight.shadow.camera.bottom = - 100;
				dirLight.shadow.camera.left = - 120;
				dirLight.shadow.camera.right = 120;
				scene.add( dirLight );

				// scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

				// ground
				const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
				mesh.rotation.x = - Math.PI / 2;
				mesh.receiveShadow = true;
				scene.add( mesh );

				const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
				grid.material.opacity = 0.2;
				grid.material.transparent = true;
				scene.add( grid );

				// model
				const manager = new LoadingManager();
				// add handler for TGA textures
				manager.addHandler( /\.tga$/i, new TGALoader() );
				const loader = new FBXLoader(manager);
				loader.load( '../textures/vikingroom.fbx', function ( object ) {

					// mixer = new THREE.AnimationMixer( object );

					// const action = mixer.clipAction( object.animations[ 0 ] );
					// action.play();

					object.traverse( function ( child ) {

						if ( child.isMesh ) {

							child.castShadow = true;
							child.receiveShadow = true;

						}

					} );

					scene.add( object );

				} );

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.shadowMap.enabled = true;
				container.appendChild( renderer.domElement );

				const controls = new OrbitControls( camera, renderer.domElement );
				controls.target.set( 0, 100, 0 );
				controls.update();

				window.addEventListener( 'resize', onWindowResize );

				// stats
				stats = new Stats();
				container.appendChild( stats.dom );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				const delta = clock.getDelta();

				if ( mixer ) mixer.update( delta );

				renderer.render( scene, camera );

				stats.update();

			}
*/



















// Render .gltf file
// let camera, scene, renderer;

// 			init();
// 			render();

// 			function init() {

// 				const container = document.createElement( 'div' );
// 				document.body.appendChild( container );

// 				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
// 				camera.position.set( - 1.8, 0.6, 2.7 );

// 				scene = new THREE.Scene();

// 				new RGBELoader()
// 					.load( '../textures/royal_esplanade_1k.hdr', function ( texture ) {

// 						texture.mapping = THREE.EquirectangularReflectionMapping;

// 						scene.background = texture;
// 						scene.environment = texture;

// 						render();

// 						// model

// 						// use of RoughnessMipmapper is optional
// 						const roughnessMipmapper = new RoughnessMipmapper( renderer );

// 						new GLTFLoader().load( '../textures/DamagedHelmet.gltf', function ( gltf ) {

// 							gltf.scene.traverse( function ( child ) {

// 								if ( child.isMesh ) {

// 									roughnessMipmapper.generateMipmaps( child.material );

// 								}

// 							} );

// 							scene.add( gltf.scene );

// 							roughnessMipmapper.dispose();

// 							render();

// 						} );

// 					} );

// 				renderer = new THREE.WebGLRenderer( { antialias: true } );
// 				renderer.setPixelRatio( window.devicePixelRatio );
// 				renderer.setSize( window.innerWidth, window.innerHeight );
// 				renderer.toneMapping = THREE.ACESFilmicToneMapping;
// 				renderer.toneMappingExposure = 1;
// 				renderer.outputEncoding = THREE.sRGBEncoding;
// 				container.appendChild( renderer.domElement );

// 				const controls = new OrbitControls( camera, renderer.domElement );
// 				controls.addEventListener( 'change', render ); // use if there is no animation loop
// 				controls.minDistance = 2;
// 				controls.maxDistance = 10;
// 				controls.target.set( 0, 0, - 0.2 );
// 				controls.update();

// 				window.addEventListener( 'resize', onWindowResize );

// 			}

// 			function onWindowResize() {

// 				camera.aspect = window.innerWidth / window.innerHeight;
// 				camera.updateProjectionMatrix();

// 				renderer.setSize( window.innerWidth, window.innerHeight );

// 				render();

// 			}

// 			//

// 			function render() {

// 				renderer.render( scene, camera );

// 			}












			
			function main() {
				const canvas = document.querySelector('#c');
				const renderer = new THREE.WebGLRenderer({canvas});
			
				const fov = 45;
				const aspect = 2;  // the canvas default
				const near = 0.1;
				const far = 100;
				const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
				camera.position.set(0, 10, 20);
			
				const controls = new OrbitControls(camera, canvas);
				controls.target.set(0, 5, 0);
				controls.update();
			
				const scene = new THREE.Scene();
				scene.background = new THREE.Color('black');
			
				{
					const planeSize = 40;
			
					const loader = new THREE.TextureLoader();
					const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
					texture.wrapS = THREE.RepeatWrapping;
					texture.wrapT = THREE.RepeatWrapping;
					texture.magFilter = THREE.NearestFilter;
					const repeats = planeSize / 2;
					texture.repeat.set(repeats, repeats);
			
					const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
					const planeMat = new THREE.MeshPhongMaterial({
						map: texture,
						side: THREE.DoubleSide,
					});
					const mesh = new THREE.Mesh(planeGeo, planeMat);
					mesh.rotation.x = Math.PI * -.5;
					scene.add(mesh);
				}
			
				{
					const skyColor = 0xB1E1FF;  // light blue
					const groundColor = 0xB97A20;  // brownish orange
					const intensity = 1;
					const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
					scene.add(light);
				}
			
				{
					const color = 0xFFFFFF;
					const intensity = 1;
					const light = new THREE.DirectionalLight(color, intensity);
					light.position.set(5, 10, 2);
					scene.add(light);
					scene.add(light.target);
				}
			
				function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
					const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
					const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
					const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
					// compute a unit vector that points in the direction the camera is now
					// in the xz plane from the center of the box
					const direction = (new THREE.Vector3())
							.subVectors(camera.position, boxCenter)
							.multiply(new THREE.Vector3(1, 0, 1))
							.normalize();
			
					// move the camera to a position distance units way from the center
					// in whatever direction the camera was from the center already
					camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
			
					// pick some near and far values for the frustum that
					// will contain the box.
					camera.near = boxSize / 100;
					camera.far = boxSize * 100;
			
					camera.updateProjectionMatrix();
			
					// point the camera to look at the center of the box
					camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
				}
			
				const cars = [];
				{
					const gltfLoader = new GLTFLoader();
					gltfLoader.load('../textures/scene.gltf', (gltf) => {
						const root = gltf.scene;
						scene.add(root);
			
						const loadedCars = root.getObjectByName('Cars');
						const fixes = [
							{ prefix: 'Car_08', rot: [Math.PI * .5, 0, Math.PI * .5], },
							{ prefix: 'CAR_03', rot: [0, Math.PI, 0], },
							{ prefix: 'Car_04', rot: [0, Math.PI, 0], },
						];
			
						root.updateMatrixWorld();
						for (const car of loadedCars.children.slice()) {
							const fix = fixes.find(fix => car.name.startsWith(fix.prefix));
							const obj = new THREE.Object3D();
							car.getWorldPosition(obj.position);
							car.position.set(0, 0, 0);
							car.rotation.set(...fix.rot);
							obj.add(car);
							scene.add(obj);
							cars.push(obj);
						}
			
						// compute the box that contains all the stuff
						// from root and below
						const box = new THREE.Box3().setFromObject(root);
			
						const boxSize = box.getSize(new THREE.Vector3()).length();
						const boxCenter = box.getCenter(new THREE.Vector3());
			
						// set the camera to frame the box
						frameArea(boxSize * 0.5, boxSize, boxCenter, camera);
			
						// update the Trackball controls to handle the new size
						controls.maxDistance = boxSize * 10;
						controls.target.copy(boxCenter);
						controls.update();
					});
				}
			
				function resizeRendererToDisplaySize(renderer) {
					const canvas = renderer.domElement;
					const width = canvas.clientWidth;
					const height = canvas.clientHeight;
					const needResize = canvas.width !== width || canvas.height !== height;
					if (needResize) {
						renderer.setSize(width, height, false);
					}
					return needResize;
				}
			
				function render(time) {
					time *= 0.001;  // convert to seconds
			
					if (resizeRendererToDisplaySize(renderer)) {
						const canvas = renderer.domElement;
						camera.aspect = canvas.clientWidth / canvas.clientHeight;
						camera.updateProjectionMatrix();
					}
			
					for (const car of cars) {
						car.rotation.y = time;
					}
			
					renderer.render(scene, camera);
			
					requestAnimationFrame(render);
				}
			
				requestAnimationFrame(render);
			}
			
			main();
			