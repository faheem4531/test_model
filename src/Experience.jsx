import { Center, OrbitControls, Text3D, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'

export default function Experience() {
    const socksLow = useGLTF('./socksLow.glb')
    const model = useRef()

    return <>

        <Perf position="bottom-right" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />


        <mesh castShadow position={[-6, -3, 3]}>
            <icosahedronGeometry flatShading args={[0.8, 1]} />
            <meshStandardMaterial color="orangered" />
        </mesh>

        <mesh castShadow position={[3, -1, -3]}>
            <torusGeometry />
            <meshStandardMaterial wireframe color="mediumpurple" />
        </mesh>

        <primitive object={socksLow.scene} scale={0.12} position={[0, -1, 1]} />

        {/* <Text3D>
            Mobius
        </Text3D> */}
    </>
}