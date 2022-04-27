<script lang="ts" setup>
import * as THREE from 'three'
import Stat from 'three/examples/jsm/libs/stats.module'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const w = window.innerWidth
const h = window.innerHeight
// 帧数
const stat = Stat()

// 房间（ 场景 ）
const scene = new THREE.Scene()

// 坐标轴
const axes = new THREE.AxesHelper(5)
scene.add(axes)

// 贴图
const loader = new THREE.TextureLoader()
const sun = loader.load(
  'https://img2.baidu.com/it/u=361337512,1108913420&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=355',
)
const earth = loader.load(
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic3.zhimg.com%2Fv2-f2cecd0be9fbda2ff4aaa0f6e7c8fe82_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic3.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653629678&t=2dfe43cf18f62b3c2284cfc9c9c342d4',
)
const moon = loader.load(
  'https://img1.baidu.com/it/u=1951675123,2595700487&fm=253&fmt=auto&app=138&f=JPEG?w=770&h=383',
)

// 房间内的物品（ 骨架 + 皮肤 === 物品 ）你可以理解为类似 HTML 以及 CSS 的关系

// 太阳
const geometry1 = new THREE.SphereGeometry(1.5)
const material1 = new THREE.MeshBasicMaterial({
  map: sun,
})
const cube1 = new THREE.Mesh(geometry1, material1)

// 地球
const geometry2 = new THREE.SphereGeometry(0.5)
const material2 = new THREE.MeshBasicMaterial({
  map: earth,
})
const cube2 = new THREE.Mesh(geometry2, material2)

// 月球
const geometry3 = new THREE.SphereGeometry(0.25)
const material3 = new THREE.MeshBasicMaterial({
  map: moon,
})
const cube3 = new THREE.Mesh(geometry3, material3)

// 光线
const light = new THREE.AmbientLight()
scene.add(light)

// 相机（ 摄像头 )
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
camera.position.set(5, 5, 5)
camera.lookAt(0, 0, 0)

// 渲染器 （ 场景做好了最终要渲染 ）
const renderer = new THREE.WebGLRenderer()
renderer.setSize(w, h)
document.body.append(renderer.domElement)
document.body.append(stat.dom)

const orbitControls = new OrbitControls(camera, renderer.domElement)

const group2 = new THREE.Group()
group2.add(cube2)
group2.add(cube3)
cube3.position.z = 1
group2.position.z = 3

const group1 = new THREE.Group()
group1.add(cube1)
group1.add(group2)
scene.add(group1)


const clock = new THREE.Clock()
const tick = () => {
  const time = clock.getElapsedTime()
  group2.rotation.y = time
  group1.rotation.y = time

  cube1.rotation.y = -time/3*2
  cube2.rotation.y = -time/3*2
  cube3.rotation.y = -time/3*2
  requestAnimationFrame(tick)

  renderer.render(scene, camera)
  stat.update()
  orbitControls.update()
}
tick()
</script>

<template></template>

<style lang="scss" scoped></style>
