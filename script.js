const loco = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
})

function FirstPageElem() {
  var tl = gsap.timeline()

  tl.from('#navbar', {
    y: '-10',
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
  })
  .to('.boundingelem', {
    y: '-10',
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 0.2,
  })
  tl.from('#herofooter', {
    y:-10, 
    opacity:0,
    duration:-1.5,
    delay:-1,
    ease: Expo.easeInOut
  })
}

function circleMouseFollower() {
  window.addEventListener('mousemove', function (dets) {
    document.querySelector(
      '#minicircle'
    ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`
  })
}

circleMouseFollower()
FirstPageElem()
