import { Center, OrbitControls, Text3D, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Experience() {
    const hamburder = useGLTF('./hamburger.glb')

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
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <primitive object={hamburder.scene} scale={0.3} />

        {/* <Text3D>
            Mobius
        </Text3D> */}
    </>
}