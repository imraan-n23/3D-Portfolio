import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Headphones({ progress }) {
  const rig = useRef()
  const left = useRef()
  const right = useRef()
  const mouse = useRef([0, 0])

  useFrame((state) => {
    const p = state.pointer
    mouse.current[0] += (p.x - mouse.current[0]) * 0.03
    mouse.current[1] += (p.y - mouse.current[1]) * 0.03
    if (rig.current) {
      rig.current.rotation.y = mouse.current[0] * 0.22 + progress * 1.8
      rig.current.rotation.x = -mouse.current[1] * 0.08
      rig.current.position.x = 0.75 - progress * 2.1
      rig.current.position.y = 0.2 + Math.sin(state.clock.elapsedTime * 0.6) * 0.08
      rig.current.position.z = -0.3 + progress * 0.6
    }
    if (left.current) left.current.rotation.z = 0.06 + Math.sin(state.clock.elapsedTime) * 0.015
    if (right.current) right.current.rotation.z = -0.06 - Math.sin(state.clock.elapsedTime) * 0.015
  })

  const dark = '#111214'
  const edge = '#2a2d31'
  return (
    <Float speed={1.4} rotationIntensity={0.08} floatIntensity={0.18}>
      <group ref={rig} scale={1.35}>
        <mesh rotation={[0, 0, Math.PI]} position={[0, 0.7, 0]}>
          <torusGeometry args={[1.65, 0.16, 22, 80, Math.PI]} />
          <meshStandardMaterial color={dark} roughness={0.32} metalness={0.82} />
        </mesh>
        <mesh position={[0, 0.52, -0.02]} rotation={[0, 0, 0]}>
          <torusGeometry args={[1.68, 0.055, 12, 80, Math.PI]} />
          <meshStandardMaterial color={edge} roughness={0.25} metalness={0.9} />
        </mesh>
        <group ref={left} position={[-1.52, -0.45, 0]} rotation={[0, 0.15, 0.06]}>
          <mesh scale={[0.72, 0.95, 0.38]}><sphereGeometry args={[0.75, 48, 48]} /><meshStandardMaterial color={dark} roughness={0.25} metalness={0.75} /></mesh>
          <mesh position={[0, 0, 0.29]} scale={[0.56, 0.75, 0.12]}><sphereGeometry args={[0.75, 48, 48]} /><meshStandardMaterial color="#08090a" roughness={0.18} metalness={0.55} /></mesh>
          <mesh position={[0, 0, 0.4]} scale={[0.34, 0.46, 0.08]}><sphereGeometry args={[0.75, 48, 48]} /><meshStandardMaterial color="#1d2126" roughness={0.22} metalness={0.9} /></mesh>
        </group>
        <group ref={right} position={[1.52, -0.45, 0]} rotation={[0, -0.15, -0.06]}>
          <mesh scale={[0.72, 0.95, 0.38]}><sphereGeometry args={[0.75, 48, 48]} /><meshStandardMaterial color={dark} roughness={0.25} metalness={0.75} /></mesh>
          <mesh position={[0, 0, 0.29]} scale={[0.56, 0.75, 0.12]}><sphereGeometry args={[0.75, 48, 48]} /><meshStandardMaterial color="#08090a" roughness={0.18} metalness={0.55} /></mesh>
          <mesh position={[0, 0, 0.4]} scale={[0.34, 0.46, 0.08]}><sphereGeometry args={[0.75, 48, 48]} /><meshStandardMaterial color="#1d2126" roughness={0.22} metalness={0.9} /></mesh>
        </group>
        <mesh position={[-0.88, 0.05, 0]} rotation={[0, 0, -0.42]}><cylinderGeometry args={[0.12, 0.12, 1.0, 24]} /><meshStandardMaterial color={dark} roughness={0.3} metalness={0.85} /></mesh>
        <mesh position={[0.88, 0.05, 0]} rotation={[0, 0, 0.42]}><cylinderGeometry args={[0.12, 0.12, 1.0, 24]} /><meshStandardMaterial color={dark} roughness={0.3} metalness={0.85} /></mesh>
      </group>
    </Float>
  )
}

export default function HeadphoneScene({ progress }) {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}>
      <color attach="background" args={['#050505']} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 5]} intensity={2.6} />
      <pointLight position={[-5, 1, 3]} intensity={12} color="#3f2a66" distance={12} />
      <pointLight position={[4, -3, 2]} intensity={4} color="#5c6879" distance={10} />
      <Sparkles count={110} scale={[13, 8, 7]} size={1.4} speed={0.22} opacity={0.42} color="#b6bdc9" />
      <Headphones progress={progress} />
      <Environment preset="city" />
    </Canvas>
  )
}
