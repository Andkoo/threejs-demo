import * as THREE from 'three'

const sphereGeometry = new THREE.SphereBufferGeometry(0.7, 32, 32)

export const spawnSphere = (scene, material) => {
  const sphere = new THREE.Mesh(sphereGeometry, material)

  scene.add(sphere)

  return sphere
}
