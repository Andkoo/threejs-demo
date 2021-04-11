import * as THREE from 'three'

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

export const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
)
camera.position.set(0, 0, 2)

export const spawnCamera = scene => {
  scene.add(camera)
}
