/************
OBJECTIVES
************/

// Didn't figure out document.body.clientWidth
// Need rain to fall full height of rainBox
// Rain should stop/disappear at bottom of rainBox
// Didn't figure out document.body.clientHeight
// Want to try different speeds for droplets
// Know for loop and if/else statement should be incuded
// But not sure how or where (╯°□°)╯︵ ┻━┻

const qs = s => document.querySelector(s)

const rainButton = () => {
  const drop = document.createElement('div')
  drop.className = 'drop'

  const img = document.createElement('img')
  img.src = 'droplet.svg'

  drop.appendChild(img)
  qs('.drop').appendChild(drop)

  const animate = () => {
    drop.style.top = `${parseInt(drop.style.top) + 1}px`
  }
  setInterval(() => {
    drop.style.top = '0px'
  }, 1000)

  setInterval(animate, 1)

  const randomize = Math.floor(Math.random() * 550)
  drop.style.left = `${randomize}px`
  console.log(randomize)
}

const main = () => {
  // const rainDrops = qs('.rainBox button[name=rainAction]')
  // for (var i = 0; i < rainDrops.length; i++) { // Drops multiple rain drops
  //   rainDrops[i].addEventListener('button', rainButton)
  // }
  qs('.rainBox button[name=rainAction]').addEventListener('click', rainButton)
}

document.addEventListener('DOMContentLoaded', main)
