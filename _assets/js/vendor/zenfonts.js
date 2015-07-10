/*!
 * Zenfonts 2.0
 * https://github.com/GaborLenard/zenfonts/
 *
 * Copyright 2015 Gabor Lenard
 *
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * For more information, please refer to <http://unlicense.org>
 *
 */

/*jshint devel:true, asi:true */
(function (win, doc) {
  "use strict"

  // these fonts are compared to the custom fonts:
  var testFonts = "Courier,Verdana"
  // These variables saves some bytes when minimizing:
  var html = doc.documentElement

  // Removes an element from its parent and releases it
  var kill = function kill(element) {
    if (element) {
      var p = element.parentNode
      if (p) {
        p.removeChild(element)
      }
    }
  }

  // Check executed recursively to check the array of divs for width change.
  // The array is handled as a single unit, all must be downloaded before it's done.
  var watchWidthChange = function watchWidthChange(divs, delay, onAllFinished) {
    var giveup = delay > 9999 // the cumulated time will be less than a minute
    var i = divs.length
    while (i--) {
      var div = divs[i]
      if (giveup || div.offsetWidth !== div.origWidth) {
        divs.splice(i, 1)
        kill(div)
      }
    }
    if (divs.length === 0) {
      if (!giveup) {
        onAllFinished()
      }
    } else {
      setTimeout(function () {
        watchWidthChange(divs, delay * 1.3, onAllFinished)
      }, delay)
    }
  }

  // a browser-agnostic way to remove class name from <html>
  var removeTopLevelClass = function addTopLevelClass(className) {
    if (className) {
      html.className = html.className.replace(
        new RegExp("(^|\\s)*" + className + "(\\s|$)*", "g"), " "
      )
    }
  }

  /**
   * Loads the specified fonts in a hidden div, forcing the browser to load them.
   * If the @param {fonts} is an array, it either contains one or more strings or
   * objects or both, mixed. The objects can have the optional attribute `style`.
   *
   * Examples:
   *   Zenfonts("Sauna Pro")
   *   Zenfonts("Sauna Pro", {onLoad: handleLoadFinished})
   *   Zenfonts(["Sauna Pro", "Dolly Pro"])
   *   Zenfonts({family:"Sauna", style: "font-style:italic; font-weight:700"},
   *     {timeout: 999, loadingClass:"sauna-load", fallbackClass:"sauna-fallb"})
   *   Zenfonts(
   *     ["Fakir-Black", {family:"Fakir-Italic", style:"font-style:italic"}],
   *     {timeout: 2500, onLoad: function () { setCookie("fakir","loaded") }
   *   )
   *
   * @param {fonts} An object or an array of objects with font families,
   *        optionally styles (see examples above).
   * @param {options} An object with optional attributes: `timeout`,
   *        `loadingClass`, `fallbackClass`, and `onLoad`.
     *        If `loadingClass` is provided, it will be applied immediately and
   *        removed once the fallback happens or the loading finished.
   *        If `fallbackClass` is provided it will be applied to the <html>
   *        element after the specified timeout if loading isn't finished.
   *        The default for `timeout` is 2222 ms.
   *        If `onLoad` is provided it will be called when loading finished.
   */
  win.Zenfonts = function Zenfonts(fonts, options) {
    if (!(fonts instanceof Array)) {
      fonts = [fonts]
    }
    options = options || {}
    var loadingClass = options.loadingClass
    var fallbackClass = options.fallbackClass
    // create a separate div for each font
    var divs = []
    for (var i = 0, l = fonts.length; i < l; i++) {
      var font = fonts[i]
      if ("string" === typeof font) {
        font = {family: font}
      }
      var family = font.family
      var style = font.style
      var div = doc.createElement("div")
      div.style.cssText = "position:absolute;top:-999px;left:-999px;visibility:hidden;" +
        "display:block;width:auto;height:auto;white-space:nowrap;line-height:normal;" +
        "margin:0;padding:0;font-variant:normal;font-size:20em;font-family:" + testFonts + ";" +
        (style ? style : "")
      div.appendChild(doc.createTextNode("// Zenfonts([{}]);"))
      // put it into the body
      doc.body.appendChild(div)
      // remember the size with the default test fonts
      div.origWidth = div.offsetWidth
      // change the font to the font family to be loaded
      div.style.fontFamily = "'" + family + "'," + testFonts
      // check whether the size changed, meaning the font is already loaded
      if (div.origWidth !== div.offsetWidth) {
        // font is already loaded
        kill(div)
      } else {
        // collect divs for watching
        divs.push(div)
      }
    }
    // success() will be executed after the font was loaded
    var success = function success() {
      // make sure the loading class is removed
      removeTopLevelClass(loadingClass)
      // the fallback class must be removed to reveal the font
      removeTopLevelClass(fallbackClass)
      // execute onLoad callback if provided
      if (options.onLoad) {
        options.onLoad()
      }
    }
    if (divs.length === 0) {
      // no fonts need to be watched, everything is loaded already
      success()
    } else {
      // put up loading class if there is any
      if (loadingClass) {
        html.className += " " + loadingClass
      }
      // onAllFinished() will be called after all the fonts in these divs were loaded
      var onAllFinished = success
      if (fallbackClass) { // this CSS className needs to be applied after the timeout
        var timeout = options.timeout || 2222
        var fallbackTimerId = setTimeout(function fallback() {
          // replaces the loading class with the fallback class
          removeTopLevelClass(loadingClass)
          html.className += " " + fallbackClass
        }, timeout)
        // redefine onAllFinished to clear the timeout as well
        onAllFinished = function () {
          clearTimeout(fallbackTimerId) // no need for the fallback anymore
          success()
        }
      }
      // initiate backround watching
      watchWidthChange(divs, 23, onAllFinished)
    }
  }

})(this, document)
