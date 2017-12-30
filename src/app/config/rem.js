(function (script) {
    var document = window.document,
      docEl = document.documentElement,
      psd = script ? ~~script.dataset.psd : 750,
      dpr = 1,
      scale = 1 / dpr,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    var metaEl = document.createElement('meta')
    metaEl.name = 'viewport'
    metaEl.content = 'width=device-width, user-scalable=no, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale
    docEl.firstElementChild.appendChild(metaEl)
    var recalc = function () {
      var width = docEl.clientWidth
      if (width / dpr > psd) {
        width = psd * dpr
      }
      docEl.dataset.width = width
      docEl.dataset.persent = 100 * (width / psd)
      docEl.style.fontSize = 100 * (width / psd) + 'px'
    }
    recalc()
    if (!document.addEventListener) return
    window.addEventListener(resizeEvt, recalc, false)
  })(document.querySelector('script[data-psd]'))