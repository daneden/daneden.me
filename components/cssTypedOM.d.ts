type RegisterPaintType = (name: string, paintCtor: unknown) => void

interface CSS {
  registerProperty(rule: CSSPropertyRule): void
  paintWorklet: PaintWorklet
}

interface PaintWorklet {
  addModule(x: string | Function): void
}

interface CSSPropertyRule {
  name: string
  syntax: string
  initialValue: string | number | CSSUnitValue
  inherits: boolean
}

declare const registerPaint: RegisterPaintType
