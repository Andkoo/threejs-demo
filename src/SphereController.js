import * as THREE from 'three'

let clock
let mouseX = 0
let mouseY = 0

export const initSphereController = () => {
  clock = new THREE.Clock()

  const windowCenterHorizontal = window.innerWidth / 2
  const windowCenterVertical = window.innerHeight / 2

  const handleMouseMove = e => {
    mouseX = e.clientX - windowCenterHorizontal
    mouseY = e.clientY - windowCenterVertical
  }

  document.addEventListener('mousemove', handleMouseMove)
}

export const updateSphere = sphere => {
  const elapsedTime = clock.getElapsedTime()

  sphere.rotation.x = mouseY / 1000
  sphere.rotation.y = 0.25 * elapsedTime + mouseX / 1000
  sphere.position.z = -0.0005 * (mouseY - sphere.rotation.x)
}
