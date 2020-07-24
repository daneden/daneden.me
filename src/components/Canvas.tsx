import cxs from "cxs"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Canvas, useFrame, useThree } from "react-three-fiber"
import * as THREE from "three"
import shaders from "../webGL/shader.frag"

const styles = cxs({
  animation: "canvasEnter 3s ease",
  animationFillMode: "both",
  bottom: 0,
  left: 0,
  position: "fixed !important",
  right: 0,
  top: 0,
  willChange: "opacity",
  zIndex: -1,
})

const GradientRenderer = () => {
  const elapsed = useRef()
  const { size } = useThree()

  useFrame(() => {
    console.log("updating", elapsed)
    if (elapsed.current !== undefined) {
      elapsed.current.material.uniforms.iTime.value += 0.01
    }
  })

  return (
    <mesh
      material={
        new THREE.ShaderMaterial({
          fragmentShader: shaders,
          uniforms: {
            iResolution: {
              value: new THREE.Vector3(size.width, size.height, 1),
            },
            iTime: { value: 0 },
          },
        })
      }
      ref={elapsed}
    >
      <planeBufferGeometry args={[50, 50]} attach="geometry" />
    </mesh>
  )
}

export default function Gradienty() {
  const docRef = useRef<HTMLElement>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    docRef.current = document.body

    if (typeof window !== "undefined") {
      setMounted(true)
    }
  }, [])

  return mounted
    ? createPortal(
        <>
          <Canvas className={styles}>
            <orthographicCamera
              bottom={-1}
              far={1}
              left={-1}
              near={-1}
              right={1}
              top={1}
            />
            <GradientRenderer />
          </Canvas>
          <style global jsx>{`
            .canvas {
              position: fixed;
              top: 0;
              left: 0;
              z-index: -1;
              animation: canvasEnter 3s ease;
              animation-fill-mode: both;
              will-change: opacity;
            }

            body > span {
              position: absolute !important;
              top: 0;
              left: 0;
            }

            @keyframes canvasEnter {
              from {
                opacity: 0;
              }
            }

            @keyframes canvasHues {
              from {
                filter: hue-rotate(-360deg);
              }
            }
          `}</style>
        </>,
        docRef.current as Element
      )
    : null
}
