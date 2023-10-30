var pos = document.documentElement;
let flash = document.getElementById('flashlight')
pos.addEventListener('mousemove', e=>{
  let x = e.clientX, y = e.clientY;
  flash.style.background = `radial-gradient(circle at ${x}px ${y}px , transparent 10%, rgba(0, 0, 0, 0.95) 30%)`
})
pos.addEventListener('touchmove', e=>{
  let x = e.clientX, y = e.clientY;
  flash.style.background = `radial-gradient(circle at ${x}px ${y}px , transparent 10%, rgba(0, 0, 0, 0.95) 30%)`
})
