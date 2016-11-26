const qs = s => document.querySelector(s)

const rainButton = () => {
  const drop = document.createElement('div')
  drop.className = 'drop'

  const img = document.createElement('img')
  img.src = 'droplet.svg'

  drop.appendChild(img)
  qs('.drop').appendChild(drop)
  //
  // const animate = () => {
  //   drop.style.top = `${parseInt(drop.style.top) + 1}px`
  // }
  // setInterval(() => {
  //   drop.style.top = '0px'
  // }, 1000)
  //
  // setInterval(animate, 1)
}

// const randNumber = () => {
//   const drop = document.createElement('div')
//   drop.className = 'drop'
//
//   const randomize = Math.floor(Math.random() * 500)
//   drop.style.left = `${randomize}px`
//   console.log(randomize)
// }

const main = () => {
  // const rainDrops = qs('.rainBox button[name=rainAction]')
  // for (var i = 0; i < rainDrops.length; i++) { // Drops multiple rain drops
  //   rainDrops[i].addEventListener('button', rainButton)
  // }
  // qs('.rainBox button[name=rainAction]').addEventListener('click', randNumber)
  qs('.rainBox button[name=rainAction]').addEventListener('click', rainButton)
}

document.addEventListener('DOMContentLoaded', main)
