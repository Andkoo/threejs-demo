import * as THREE from 'three'

import { initRenderer, renderer } from './Renderer'
import { spawnCamera, camera } from './Camera'
import { spawnLights } from './Lighting'
import { spawnSphere } from './Sphere'
import { sphereMaterial } from './Materials'
import { initSphereController, updateSphere } from './SphereController'

import './style.css'

const scene = new THREE.Scene()

initRenderer(camera)
spawnCamera(scene)
spawnLights(scene)
const sphere = spawnSphere(scene, sphereMaterial)
initSphereController()

const tick = () => {
  renderer.render(scene, camera)

  updateSphere(sphere)

  requestAnimationFrame(tick)
}

window.onload = tick
