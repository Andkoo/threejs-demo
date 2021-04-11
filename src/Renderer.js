import * as THREE from 'three'

let cam

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const updateRenderer = () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  cam.aspect = sizes.width / sizes.height
  cam.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

const canvas = document.querySelector('canvas.webgl')

export const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })

export const initRenderer = camera => {
  cam = camera

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  window.addEventListener('resize', updateRenderer)
}
