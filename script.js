const loco = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
})

var timeout ;

function circleChaptaKaro() {
  //define default scale value
  var xscale = 1
  var yscale = 1

  var xprev = 0
  var yprev = 0

  window.addEventListener('mousemove', function (dets) {
    clearTimeout(timeout)
    // var xdiff = dets.clientX - xprev
    // var ydiff = dets.clientX - xprev
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev)
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev)
    xprev = dets.clientX
    yprev = dets.clientY

    circleMouseFollower(xscale, yscale)
    
    timeout = setTimeout(function () {
      document.querySelector(
      '#minicircle'
      ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(1,1)`
    },100)
    
  })
}
circleChaptaKaro()
function FirstPageElem() {
  var tl = gsap.timeline()

  tl.from('#navbar', {
    y: '-10',
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
  }).to('.boundingelem', {
    y: '-10',
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 0.2,
  })
  tl.from('#herofooter', {
    y: -10,
    opacity: 0,
    duration: -1.5,
    delay: -1,
    ease: Expo.easeInOut,
  })
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener('mousemove', function (dets) {
    document.querySelector(
      '#minicircle'
    ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale}, ${yscale})`
  })
}

circleMouseFollower()
FirstPageElem()
