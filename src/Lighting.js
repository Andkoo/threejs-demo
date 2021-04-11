import * as THREE from 'three'

const pointLight1 = new THREE.PointLight('#ffffff')
pointLight1.position.set(0, 0, 5)
pointLight1.intensity = 0.1

const pointLight2 = new THREE.PointLight('#8f1d1d')
pointLight2.position.set(1, -1.1, 0.6)
pointLight2.intensity = 0.35

const pointLight3 = new THREE.PointLight('#035657')
pointLight3.position.set(-0.5, 0.5, 1)
pointLight3.intensity = 0.5

export const spawnLights = scene => {
  scene.add(pointLight1)
  scene.add(pointLight2)
  scene.add(pointLight3)
}
