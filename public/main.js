/************
OBJECTIVES
************/
// Want to try different speeds for droplets

const qs = s => document.querySelector(s)
const qsa = s => document.querySelectorAll(s)

const rainButton = () => {
  const drop = document.createElement('div')
  drop.className = 'drop'
  const img = document.createElement('img')
  img.src = 'droplet.svg'

  drop.appendChild(img)
  qs('.drop').appendChild(drop)

  drop.style.top = 0
  drop.style.left = `${Math.round(Math.random() * document.body.clientWidth)}px`
}

const animate = () => {
  const drops = qsa('.drop')
  for (var i = 0; i < drops.length; i++) {
    const top = parseInt(drops[i].style.top)
    drops[i].style.top = `${top + 1}px`
    if (top > 350) {
      drops[i].style.top = 0
    } else {
      drops[i].style.top = `${top + 1}px` // loops the raindrop instead of removing
    }
  }
}

const main = () => {
  setInterval(animate, 16.6)
  qs('.rainBox button[name=rainAction]').addEventListener('click', rainButton)
}

document.addEventListener('DOMContentLoaded', main)
