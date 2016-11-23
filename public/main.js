const qs = s => document.querySelector(s)
const drop = qs('.drop')

const rainButton = () => {
  setInterval(() => {
    drop.style.top = '0px'
  }, 1000)

  const animate = () => {
    drop.style.top = `${parseInt(drop.style.top) + 1}px`
  }

  setInterval(animate, 16.66)
}

// const resetDrop = () => {
//   if (drop.style.top === 100) {
//     clearInterval()
//   } else {
//     rainButton()
//   }
// }

const main = () => {
  // for (let i = 0; i < drop.length; i++) {
  //   const li = document.createElement('li')
  //   li.textContent = drop[i].addEventListener(rainButton)
  // }
  qs('.rainBox button[name=rainAction]').addEventListener('click', rainButton)
  // drop.addEventListener(resetDrop)
}

document.addEventListener('DOMContentLoaded', main)
