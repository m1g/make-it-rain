const qs = s => document.querySelector(s)
const drop = qs('.drop')

const rainButton = () => {
  setInterval(() => {
    drop.style.top = '0px'
  }, 1000)
  const animate = () => {
    drop.style.top = `${parseInt(drop.style.top) + 1}px`
  }
  setInterval(animate, 1)
}

const randNumber = () => {
  const randomize = Math.floor(Math.random() * 500)
  drop.style.left = `${randomize}px`
  console.log(randomize)
}

const main = () => {
  const rainDrops = qs('.rainBox button[name=rainAction]')
  for (var i = 0; i < rainDrops.length; i++) { // Drops multiple rain drops
    rainDrops[i].addEventListener('button', rainButton)
  }
  qs('.rainBox button[name=rainAction]').addEventListener('click', randNumber)
  qs('.rainBox button[name=rainAction]').addEventListener('click', rainButton)
}

document.addEventListener('DOMContentLoaded', main)
