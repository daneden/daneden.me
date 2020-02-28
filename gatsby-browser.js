require('./static/css/syntax.css')

window.__DE__homePageSetup = () => {
  if (
    'registerProperty' in CSS &&
    'paintWorklet' in CSS &&
    !window.__DE__homePageSetupComplete
  ) {
    CSS.registerProperty({
      name: '--line-direction',
      syntax: 'tl-br | tr-bl | center',
      initialValue: 'tl-br',
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
