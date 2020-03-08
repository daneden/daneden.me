require('./static/css/syntax.css')

window.__DE__homePageSetup = () => {
  if (
    'registerProperty' in CSS &&
    'paintWorklet' in CSS &&
    CSS.supports('background', 'paint(id)') &&
    !window.__DE__homePageSetupComplete
  ) {
    CSS.registerProperty({
      name: '--line-direction',
      syntax: 'tlbr | trbl | center',
      initialValue: 'tlbr',
      inherits: true,
    })

    CSS.registerProperty({
      name: '--line-color',
      syntax: '<color>',
      initialValue: 'currentcolor',
      inherits: true,
    })

    CSS.paintWorklet.addModule('/paintWorklet.js')
    window.__DE__homePageSetupComplete = true
  }
}
