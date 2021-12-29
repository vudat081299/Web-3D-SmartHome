import './style.css'
import * as THREE from 'three'
// import { OBJLoader } from './OBJLoader.js';
// import { OBJLoader } from 'three/src/loaders/ObjectLoader.js';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'
import gsap from 'gsap'

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

//
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

// UI Debug 
import * as dat from 'dat.gui'

// Controls
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


// Render .obj file
/*
let camera, scene, renderer;

      init();
      render();

      function init() {

        const container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
        camera.position.set( - 1.8, 0.6, 2.7 );

        scene = new THREE.Scene();

        new RGBELoader()
          .load( '../textures/royal_esplanade_1k.hdr', function ( texture ) {

            texture.mapping = THREE.EquirectangularReflectionMapping;

            scene.background = texture;
            scene.environment = texture;

            render();

            // model

            // use of RoughnessMipmapper is optional
            const roughnessMipmapper = new RoughnessMipmapper( renderer );

            new GLTFLoader().load( '../textures/DamagedHelmet.gltf', function ( gltf ) {

              gltf.scene.traverse( function ( child ) {

                if ( childmesh ) {

                  roughnessMipmapper.generateMipmaps( child.material );

                }

              } );

              scene.add( gltf.scene );

              roughnessMipmapper.dispose();

              render();

            } );

          } );

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild( renderer.domElement );

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.addEventListener( 'change', render ); // use if there is no animation loop
        controls.minDistance = 2;
        controls.maxDistance = 10;
        controls.target.set( 0, 0, - 0.2 );
        controls.update();

        window.addEventListener( 'resize', onWindowResize );

      }

      function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        render();

      }

      //

      function render() {

        renderer.render( scene, camera );

      }
*/



















// Render .fbx file
/*
let camera, scene, renderer;

      init();
      render();

      function init() {

        const container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
        camera.position.set( - 1.8, 0.6, 2.7 );

        scene = new THREE.Scene();

        new RGBELoader()
          .load( '../textures/royal_esplanade_1k.hdr', function ( texture ) {

            texture.mapping = THREE.EquirectangularReflectionMapping;

            scene.background = texture;
            scene.environment = texture;

            render();

            // model

            // use of RoughnessMipmapper is optional
            const roughnessMipmapper = new RoughnessMipmapper( renderer );

            new GLTFLoader().load( '../textures/DamagedHelmet.gltf', function ( gltf ) {

              gltf.scene.traverse( function ( child ) {

                if ( childmesh ) {

                  roughnessMipmapper.generateMipmaps( child.material );

                }

              } );

              scene.add( gltf.scene );

              roughnessMipmapper.dispose();

              render();

            } );

          } );

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild( renderer.domElement );

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.addEventListener( 'change', render ); // use if there is no animation loop
        controls.minDistance = 2;
        controls.maxDistance = 10;
        controls.target.set( 0, 0, - 0.2 );
        controls.update();

        window.addEventListener( 'resize', onWindowResize );

      }

      function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        render();

      }

      //

      function render() {

        renderer.render( scene, camera );

      }
*/



















// Render .gltf file method 1
/*
let camera, scene, renderer;

      init();
      render();

      function init() {

        const container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
        camera.position.set( - 1.8, 0.6, 2.7 );

        scene = new THREE.Scene();

        new RGBELoader()
          .load( '../textures/royal_esplanade_1k.hdr', function ( texture ) {

            texture.mapping = THREE.EquirectangularReflectionMapping;

            scene.background = texture;
            scene.environment = texture;

            render();

            // model

            // use of RoughnessMipmapper is optional
            const roughnessMipmapper = new RoughnessMipmapper( renderer );

            new GLTFLoader().load( '../textures/DamagedHelmet.gltf', function ( gltf ) {

              gltf.scene.traverse( function ( child ) {

                if ( childmesh ) {

                  roughnessMipmapper.generateMipmaps( child.material );

                }

              } );

              scene.add( gltf.scene );

              roughnessMipmapper.dispose();

              render();

            } );

          } );

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild( renderer.domElement );

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.addEventListener( 'change', render ); // use if there is no animation loop
        controls.minDistance = 2;
        controls.maxDistance = 10;
        controls.target.set( 0, 0, - 0.2 );
        controls.update();

        window.addEventListener( 'resize', onWindowResize );

      }

      function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        render();

      }

      //

      function render() {

        renderer.render( scene, camera );

      }
*/



















// Render .gltf file method 2
/*
let camera, scene, renderer;

      init();
      render();

      function init() {

        const container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
        camera.position.set( - 1.8, 0.6, 2.7 );

        scene = new THREE.Scene();

        new RGBELoader()
          .load( '../textures/royal_esplanade_1k.hdr', function ( texture ) {

            texture.mapping = THREE.EquirectangularReflectionMapping;

            scene.background = texture;
            scene.environment = texture;

            render();

            // model

            // use of RoughnessMipmapper is optional
            const roughnessMipmapper = new RoughnessMipmapper( renderer );

            new GLTFLoader().load( '../textures/DamagedHelmet.gltf', function ( gltf ) {

              gltf.scene.traverse( function ( child ) {

                if ( childmesh ) {

                  roughnessMipmapper.generateMipmaps( child.material );

                }

              } );

              scene.add( gltf.scene );

              roughnessMipmapper.dispose();

              render();

            } );

          } );

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild( renderer.domElement );

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.addEventListener( 'change', render ); // use if there is no animation loop
        controls.minDistance = 2;
        controls.maxDistance = 10;
        controls.target.set( 0, 0, - 0.2 );
        controls.update();

        window.addEventListener( 'resize', onWindowResize );

      }

      function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        render();

      }

      //

      function render() {

        renderer.render( scene, camera );

      }
*/



















// Render .gltf file method 3
// Base
/** 
  * Priority: 
  * 0 - independent method
  * 1 - depended method
  * 2 - depending method
  * n - depending method level n
  */


/** MARK: - Declaration --------------------------------------------------------------------------------------------------------------------------------------- */
let scene, renderer, floor, directionalLight, camera, controls, mesh, material, elapsedTime, raycaster, controlType = 'orbit'

const pointer = new THREE.Vector2()
const delta = 0.001 // solver overide block object on UI
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
const cursor = {
  x: 0,
  y: 0
}
const frustumSize = 1000


/** MARK: - Canvas --------------------------------------------------------------------------------------------------------------------------------------- */
const canvas = document.querySelector('canvas.webgl')


/** MARK: - Actions --------------------------------------------------------------------------------------------------------------------------------------- */
let mixer = null


/** MARK: - Debug helper --------------------------------------------------------------------------------------------------------------------------------------- */
const parameters = { // user for UI debugger
  color: 0xff0000,
  spin: () => {
    gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + 10 })
  }
}
const gui = new dat.GUI({ closed: true, width: 400 }) // UI Debug 
// gui.hide()


/** MARK: - Intersections --------------------------------------------------------------------------------------------------------------------------------------- */
let INTERSECTED


/** MARK: - Drag --------------------------------------------------------------------------------------------------------------------------------------- */
let container;
let group;
let enableSelection = false;

const objects = [];









/** 
 * MARK: - Scene 
 * - Priority: 1
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareScene() {
  console.log("prepareScene");
  scene = new THREE.Scene()
  scene.background = new THREE.Color('black');
}


/** 
 * MARK: - Renderer 
 * - Priority: 1
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function renderToCanvas() {
  console.log("renderToCanvas");
  renderer = new THREE.WebGLRenderer({
    canvas: canvas
  })
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}


/** 
 * MARK: - Full screen switcher 
 * - Priority: 1
 * - Switch between full screen and normal screen
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function switchScreenState() {
  // this version may work on many browser
  const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
    canvas.requestFullscreen()
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen()
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
  }

  // this version won't work on Safari, need declare like above to work on Safari
  // if (!document.fullscreenElement) {
  //   canvas.requestFullscreen()
  // } else {
  //   document.exitFullscreen()
  // }
}


/** 
 * MARK: - Render action
 * - Priority: 1
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function render() {
  renderer.render( scene, camera );
}
















/** 
 * MARK: - Models 
 * - Priority: 2
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareModels() {
  console.log("prepareModels");
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('../draco/')

  const gltfLoader = new GLTFLoader()
  // gltfLoader.setDRACOLoader(dracoLoader)

  // '../models/Fox/glTF/Fox.gltf',
  gltfLoader.load(
    '../textures/scene.gltf',
    (gltf) => {
      gltf.scene.scale.set(0.001, 0.001, 0.001)
      scene.add(gltf.scene)

      // Animation
      // mixer = new THREE.AnimationMixer(gltf.scene)
      // const action = mixer.clipAction(gltf.animations[2])
      // action.play()
    }
  )
}


/** 
 * MARK: - Floor 
 * - Priority: 2
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareFloor() {
  console.log("prepareFloor");
  floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshStandardMaterial({
      color: '#ffffff',
      metalness: 0,
      roughness: 0.5
    })
  )
  floor.receiveShadow = true
  floor.rotation.x = - Math.PI * 0.5
  floor.position.y -= 1
  scene.add(floor)
}


/** 
 * MARK: - Objects 
 * - Priority: 2
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareObjects() {
  console.log("prepareObjects");
  //Create a sphere that cast shadows (but does not receive them)
  // const sphereGeometry = new THREE.SphereGeometry( 5, 32, 32 );
  // const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
  // const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  // sphere.castShadow = true; // default is false
  // sphere.receiveShadow = false; // default
  // scene.add( sphere );

  //Create a plane that receives shadows (but does not cast them)
  // const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
  // const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  // const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  // plane.receiveShadow = true;
  // scene.add(plane);

  const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)
  // const geometry = new THREE.BufferGeometry()
  // const count = 0
  // const positionsArray = new Float32Array(count * 3 * 3)
  // for(let i = 0; i < count * 3 * 3; i++) {
  //   positionsArray[i] = (Math.random() - 0.5) * 6
  // }
  // const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
  // geometry.setAttribute('position', positionsAttribute)

  material = new THREE.MeshLambertMaterial({ color: 0xff0000 }) // , wireframe: true })
  mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(0, 0, 0)
  scene.add(mesh)

  // Support drag
  objects.push(mesh);

  /**
   * MARK: - Rotation 
   * - Euler roration
   * - Watch out: When rotate on an axis, might also rotate the other axis. The rotation goes by default in the x, y and z order and you can get strange result like an axis not working anymore. This is called gimbal lock.
   * - Fix: 
   * + method 1: Change this order by using the reoder() method ``` object.rotation.reoder('YXZ') ```. Do it before changing the rotation.
   * + method 2 - high recommend: Use quaternion.
   * --------------------------------------------------------------------------------------------------------------------------------------- */
  // mesh.rotation.reorder('YXZ')
  // mesh.rotation.x = Math.PI * 0.25
}


/** 
 * MARK: - Intersections
 * - Priority: 2
 * --------------------------------------------------------------------------------------------------------------------------------------- */
 function prepareIntersections() {
  // container = document.createElement('div');
  // document.body.appendChild(container);

  const intersectionBoxGeometry = new THREE.BoxGeometry(20, 20, 20);

  for (let i = 0; i < 100; i++) {
    const object = new THREE.Mesh(intersectionBoxGeometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }));

    object.position.x = Math.random() * 800 - 400;
    object.position.y = Math.random() * 800 - 400;
    object.position.z = Math.random() * 800 - 400;

    // object.rotation.x = Math.random() * 2 * Math.PI;
    // object.rotation.y = Math.random() * 2 * Math.PI;
    // object.rotation.z = Math.random() * 2 * Math.PI;

    object.scale.x = Math.random() + 0.5;
    object.scale.y = Math.random() + 0.5;
    object.scale.z = Math.random() + 0.5;

    scene.add(object);
    
    // Support drag
    objects.push( object );
  }

  raycaster = new THREE.Raycaster();
  // canvas.appendChild(renderer.domElement);
  // stats = new Stats();
  // canvas.appendChild(stats.dom);
}


/** 
 * MARK: - Lights 
 * - Priority: 2
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareLight() {
  console.log("prepareLight");
  // const ambientLight = new THREE.AmbientLight(0xffffff, 1)
  // scene.add(ambientLight)

  // // const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  // // directionalLight.castShadow = true
  // // directionalLight.shadow.mapSize.set(1024, 1024)
  // // directionalLight.shadow.camera.far = 15
  // // directionalLight.shadow.camera.left = - 7
  // // directionalLight.shadow.camera.top = 7
  // // directionalLight.shadow.camera.right = 7
  // // directionalLight.shadow.camera.bottom = - 7
  // // directionalLight.position.set(- 5, 5, 0)
  // // scene.add(directionalLight)

  // //Create a DirectionalLight and turn on shadows for the light
  // directionalLight = new THREE.DirectionalLight(0xffffff, 1, 1);
  // directionalLight.position.set(-1, -1, -1); //default; light shining from top
  // directionalLight.castShadow = true; // default false
  // scene.add(directionalLight);


  // Ambient light
  const ambientLight = new THREE.AmbientLight()
  ambientLight.color = new THREE.Color(0xffffff)
  ambientLight.intensity = 0.5
  scene.add(ambientLight)

  // Directional light
  const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.3)
  directionalLight.position.set(1, 0.25, 0)
  scene.add(directionalLight)

  // Hemisphere light
  const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.3)
  scene.add(hemisphereLight)

  // Point light
  const pointLight = new THREE.PointLight(0xff9000, 0.5, 10, 2)
  pointLight.position.set(1, - 0.5, 1)
  scene.add(pointLight)

  // Rect area light
  const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 2, 1, 1)
  rectAreaLight.position.set(- 1.5, 0, 1.5)
  rectAreaLight.lookAt(new THREE.Vector3())
  scene.add(rectAreaLight)

  // Spot light
  const spotLight = new THREE.SpotLight(0x78ff00, 0.5, 10, Math.PI * 0.1, 0.25, 1)
  spotLight.position.set(0, 2, 3)
  scene.add(spotLight)

  spotLight.target.position.x = - 0.75
  scene.add(spotLight.target)

  // Helpers
  const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.2)
  scene.add(hemisphereLightHelper)

  const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2)
  scene.add(directionalLightHelper)

  const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2)
  scene.add(pointLightHelper)

  const spotLightHelper = new THREE.SpotLightHelper(spotLight)
  scene.add(spotLightHelper)
  window.requestAnimationFrame(() => {
    spotLightHelper.update()
  })

  const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight)
  scene.add(rectAreaLightHelper)

  window.requestAnimationFrame(() => {
    rectAreaLightHelper.position.copy(rectAreaLight.position)
    rectAreaLightHelper.quaternion.copy(rectAreaLight.quaternion)
    // rectAreaLightHelper.update()
  })
}


/** 
 * MARK: - Camera 
 * - Priority: 2
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareCamera() {
  console.log("prepareCamera");
  camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, frustumSize)
  camera.position.set(0, 0, 10)
  scene.add(camera)
}


/** 
 * MARK: - Axes helper
 * - Priority: 2
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareAxesHelper() {
  console.log("prepareAxesHelper");
  const axesHelper = new THREE.AxesHelper(2)
  scene.add(axesHelper)
}










/** 
 * MARK: - Camera Helper for light
 * - Priority: 3
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareCameraHelper() {
  console.log("prepareCameraHelper");
  //Create a helper for the shadow camera (optional)
  const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
  scene.add(helper);
}


/** 
 * MARK: - Shadow 
 * - Priority: 3
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareShadow() {
  console.log("prepareShadow");
  /** MARK: - Textures --------------------------------------------------------------------------------------------------------------------------------------- */
  const textureLoader = new THREE.TextureLoader()
  const bakedShadow = textureLoader.load('/textures/bakedShadow.jpg')
  const simpleShadow = textureLoader.load('/textures/simpleShadow.jpg')

  const sphereShadow = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1.5, 1.5),
    new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      alphaMap: simpleShadow
    })
  )
  sphereShadow.rotation.x = - Math.PI * 0.5
  sphereShadow.position.y = floor.position.y + delta
  scene.add(sphereShadow)
}


/** 
 * MARK: - Controls 
 * - Priority: 3
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareControls() {
  if (controlType == 'orbit') {
    console.log("prepare orbit control");
    controls = new OrbitControls(camera, canvas)
    controls.target.set(0, 0.75, 0)
    controls.enableDamping = true // set smooth for controls
    controls.update()
  
  } else if (controlType == 'drag') {
    console.log("prepare drag control");
    group = new THREE.Group();
    scene.add(group);

    controls = new DragControls([...objects], camera, renderer.domElement);
    controls.addEventListener('drag', render);

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
  }
}


/** 
 * MARK: - Event listeners 
 * - Priority: 3
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function onKeyDown(event) {
  enableSelection = (event.keyCode === 16) ? true : false;
}
function onKeyUp() {
  enableSelection = false;
}
function moveMouseListener() {
  console.log("moveMouseListener");
  window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = - (event.clientY / sizes.height - 0.5)
  })
}
function resizeListener() {
  console.log("resizeListener");
  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix() // must call this after change aspect of camera

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })
}
function doubleClickListener() {
  window.addEventListener('dblclick', () => {
    // this event listener doesn't work on Safari
    switchScreenState()
  })
}
function clickListener() {
  document.addEventListener('click', (event) => {
    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    // Support drag
    event.preventDefault();
    if (enableSelection === true) {
      const draggableObjects = controls.getObjects();
      draggableObjects.length = 0;

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersections = raycaster.intersectObjects(objects, true);

      if (intersections.length > 0) {
        const object = intersections[0].object;
        if (group.children.includes(object) === true) {
          object.material.emissive.set(0x000000);
          scene.attach(object);
        } else {
          object.material.emissive.set(0xaaaaaa);
          group.attach(object);
        }
        controls.transformGroup = true;
        draggableObjects.push(group);
      }

      if (group.children.length === 0) {
        controls.transformGroup = false;
        draggableObjects.push(...objects);
      }
    }
  });
}
function prepareEventListeners(eventListeners) {
  console.log("prepareEventListeners");
  eventListeners.forEach(function (eventListener) {
    eventListener()
  })
}


/** 
 * MARK: - Groups
 * - Priority: 3
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareGroups() {
  console.log("prepareGroups");
  const group = new THREE.Group()

  // group.add(mesh)
  const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
  )
  cube1.position.x = -2
  group.add(cube1)

  const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  )
  group.add(cube2)

  const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
  )
  cube3.position.x = 2 + delta
  group.add(cube3)

  group.position.y = 2
  scene.add(group)
}













/** 
 * MARK: - Animations 
 * - Priority: 4
 * --------------------------------------------------------------------------------------------------------------------------------------- */
const clock = new THREE.Clock()
function updateCameraOnTick() {
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 10
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 10
  // camera.position.y = - cursor.y * 5

  // mesh.position.y = Math.sin(elapsedTime) * 10
  // mesh.position.x = Math.cos(elapsedTime) * 10
  // camera.lookAt(mesh.position)
}
function updateControlOnTick() {
  // prerequisites before call this method: call prepareControls() to initialize controls
  if (controlType == 'orbit' && controls != null) {
    controls.update()
  }
}
function updateIntersectionsOnTick() {
  // find intersections
  raycaster.setFromCamera(pointer, camera);

  const intersects = raycaster.intersectObjects(scene.children, false);
  // console.log(intersects.length);
  if (intersects.length > 0) {
    if (INTERSECTED != intersects[0].object) {
      // if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
      INTERSECTED = intersects[0].object;
      if (INTERSECTED.material.emissive) {
        // INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
        INTERSECTED.material.emissive.setHex(0xffaaaa);
      }
    }
  } else {
    // if (INTERSECTED.material.emissive) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
    // INTERSECTED = null;
  }
}
function prepareAnimationsAndRender(updateComponents) {
  console.log("prepareAnimationsAndRender");
  let previousTime = 0
  const tick = () => {
    elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Model animation
    if (mixer) {
      mixer.update(deltaTime)
    }

    // Update
    updateComponents.forEach(function (updateComponent) {
      updateComponent()
    })

    // Render - The lookAt() must call right before render()
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

  }
  tick()
}














/** 
 * MARK: - UI Debug 
 * - Priority: 5
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareUIDebugger() {
  gui.add(mesh.position, 'y')
    .min(-3)
    .max(3)
    .step(0.01)
    .name('elevation')
  gui.add(mesh, 'visible')
  gui.add(material, 'wireframe')
  gui.addColor(parameters, 'color')
    .onChange(() => {
      material.color.set(parameters.color)
    })
  gui.add(parameters, 'spin')
}









/** MARK: - Application --------------------------------------------------------------------------------------------------------------------------------------- */
/** Priority: - 0*/

/** Priority: - 1 */
prepareScene()
renderToCanvas()

/** Priority: - 2 */
prepareCamera()
prepareObjects()
prepareIntersections()
prepareLight()
prepareFloor()
// prepareModels()
// prepareAxesHelper()

/** Priority: - 3 */
let eventListenersList = [resizeListener, moveMouseListener, clickListener]
prepareEventListeners(eventListenersList)
controlType = 'drag'
prepareControls()

// prepareShadow()
// prepareCameraHelper()
// prepareGroups()

/** Priority: - 4 */
let updateComponentsList = [updateControlOnTick, updateCameraOnTick, updateIntersectionsOnTick]
prepareAnimationsAndRender(updateComponentsList)

/** Priority: - 5 */
prepareUIDebugger()











// Utilize methods
// gsap.to(mesh.position, { duration: 1, delay: 1, x: 0 })
// gsap.to(mesh.position, { duration: 0.5, delay: 1, x: 20 })
