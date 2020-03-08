class Line {
  static get inputProperties() {
    return ['--line-direction', '--line-color']
  }

  paint(ctx, geom, properties) {
    const { width, height } = geom
    const direction = properties.get('--line-direction').value
    const color = properties.get('--line-color')
    const strokeWidth = 1

    const orig = {
      x:
        direction === 'tlbr'
          ? strokeWidth
          : direction === 'trbl'
          ? width - strokeWidth
          : width / 2,
      y: strokeWidth,
    }

    const dest = {
      x:
        direction === 'tlbr'
          ? width - strokeWidth
          : direction === 'trbl'
          ? strokeWidth
          : width / 2,
      y: height - strokeWidth,
    }

    ctx.strokeStyle = color
    ctx.lineWidth = strokeWidth
    ctx.beginPath()
    ctx.moveTo(orig.x, orig.y)
    ctx.lineTo(dest.x, dest.y)
    ctx.stroke()
  }
}

registerPaint('line', Line)
