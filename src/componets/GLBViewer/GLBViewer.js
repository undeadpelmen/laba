// components/GLBViewer.jsx
'use client'

import {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {ContactShadows, Environment, OrbitControls, useGLTF} from '@react-three/drei'
import classes from "./glbviewer.module.css"

function Model({url, scale = 1, position = [0, 0, 0], autoRatate = false}) {
    const group = useRef()
    const {scene, nodes, materials} = useGLTF(url)

    // Optional: Auto-rotation
    useFrame((state) => {
        if (group.current && autoRatate) {
            group.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1
        }
    })

    // If you want to access specific parts of the model
    // Object.keys(nodes).forEach(name => {
    //   console.log(name) // See all available nodes
    // })

    return (
        <group ref={group} dispose={null}>
            <primitive
                object={scene}
                scale={scale}
                position={position}
            />
        </group>
    )
}

export default function GLBViewer({
                                      modelPath = '/models/sample.glb',
                                      showControls = true,
                                      autoRotate = false,
                                      scale = 1
                                  }) {
    const [loading, setLoading] = useState(true)

    return (
        <div className={classes.GLBViewer}>
            <Canvas
                shadows
                camera={{position: [10, 10, 10], fov: 50}}
                onCreated={() => setLoading(false)}
                className={classes.Display}
            >
                <color attach="background" args={['#888888']}/>

                {/* Lighting */}
                <ambientLight intensity={0.5}/>
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={1}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                {/* Model */}
                <Model url={modelPath} scale={scale} autoRatate={autoRotate}/>
                <Environment preset="studio"/>
                <ContactShadows
                    position={[0, -1, 0]}
                    opacity={0.5}
                    scale={10}
                    blur={2}
                    far={1}
                />

                {/* Controls */}
                {showControls && (
                    <OrbitControls
                        autoRotate={autoRotate}
                        autoRotateSpeed={0.5}
                        enableZoom={true}
                        enablePan={true}
                        minDistance={2}
                        maxDistance={10}
                    />
                )}
            </Canvas>

            {loading && (
                <p> Loading model ....</p>
            )}
        </div>
    )
}