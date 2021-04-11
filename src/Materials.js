import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()

export const sphereNormal = textureLoader.load('textures/normal_map.jpg')

export const sphereMaterial = new THREE.MeshStandardMaterial()
sphereMaterial.color = new THREE.Color('#cccccc')
sphereMaterial.metalness = 1.5
sphereMaterial.roughness = 0.7
sphereMaterial.normalMap = sphereNormal
sphereMaterial.normalScale = new THREE.Vector2(1, 1)
