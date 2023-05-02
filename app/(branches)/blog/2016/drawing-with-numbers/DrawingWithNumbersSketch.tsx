"use client"

import { NextReactP5Wrapper } from "@p5-wrapper/next"
import { type Sketch } from "@p5-wrapper/react"

const canvasWidth = 300,
  canvasHeight = canvasWidth,
  length = 8,
  margin = 10,
  strokeWidth = 2,
  columns = getNoOfCols(canvasWidth, length, margin),
  rows = getNoOfRows(canvasHeight, strokeWidth, margin)

function getNoOfRows(h: number, sw: number, m: number) {
  return getNoOfCols(h, sw, m)
}

function getNoOfCols(w: number, length: number, m: number) {
  let totalLength = 0,
    noOfCols = 0

  m = m || 0

  while (totalLength < w) {
    totalLength += m + length
    noOfCols++
  }

  return noOfCols
}

export default function P5Sketch() {
  const sketch: Sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(canvasWidth, canvasHeight)
    }

    p5.draw = () => {
      p5.background(255)
      for (let i = 0; i < rows - 1; i++) {
        for (let j = 0; j < columns - 1; j++) {
          const currentOffset = {
            x: j * length + (j + 1) * margin,
            y: (i + 1) * margin + i * strokeWidth + strokeWidth,
          }

          const delta = {
            x: currentOffset.x + length / 2 - margin / 2 - p5.mouseX,
            y: currentOffset.y - p5.mouseY,
          }

          const theta = Math.atan2(delta.y, delta.x),
            deltaThreshold = 40

          p5.strokeWeight(strokeWidth)
          p5.stroke(100)

          if (
            Math.abs(delta.x) < deltaThreshold &&
            Math.abs(delta.y) < deltaThreshold
          ) {
            const amt = (Math.abs(delta.x) + Math.abs(delta.y)) / 2
            const amtMapped = p5.map(amt, 0, deltaThreshold, -50, 255)
            p5.stroke(100, amtMapped)
          }

          p5.push()
          // translate(centerPoint.x, centerPoint.y);
          p5.translate(currentOffset.x, currentOffset.y)
          p5.rotate(theta)

          p5.line(0, 0, 0 + length, 0)
          p5.pop()

          p5.fill(250, 150, 0)
          p5.noStroke()
        }
      }
    }
  }

  return <NextReactP5Wrapper sketch={sketch} />
}
