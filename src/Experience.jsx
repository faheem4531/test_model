import { Center, OrbitControls, Text3D, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'

export default function Experience() {
    const socksLow = useGLTF('./socksLow.glb')
    const torus = useRef()

    useFrame((state, delta) => {
        torus.current.rotation.z += delta * 0.2
    })
    const { perfVisible } = useControls({
        perfVisible: true
    })

    const { visible, positionT, colorT, wireframe, scaleT, rotationT } = useControls('Torus Controls', {
        visible: true,
        positionT: {
            value: { x: 2.8, y: -1.8, z: -7.6 },
            step: 0.1,
            joystick: 'invertY'
        },
        colorT: "#650a0a",
        wireframe: true,
        scaleT: {
            value: 7,
            step: 0.01,
            min: 0,
            max: 15
        },
        rotationT: {
            value: { x: -3.4, y: -0.2, z: 0 },
            step: 0.1,
            joystick: 'invertY'
        }
    })

    return <>


        {perfVisible ? <Perf position='bottom-right' /> : null}
        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <mesh ref={torus} castShadow position={[positionT.x, positionT.y, positionT.z]} rotation={[rotationT.x, rotationT.y, rotationT.z]} scale={scaleT} visible={visible}>
            <torusGeometry />
            <meshStandardMaterial wireframe={wireframe} color={colorT} />
        </mesh>

        <primitive object={socksLow.scene} scale={0.1} position={[3, -0.5, 1]} rotation-y={-0.2} />


    </>
}