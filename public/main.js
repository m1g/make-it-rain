const qs = s => document.querySelector(s)
const drop = qs('.drop')

const rainButton = () => {
  const buttonAction = qs('.rainAction button')
  buttonAction.setInterval(() => {
    drop.style.top = '0px'
  }, 1000)

  rainButton()
}

const resetDrop = () => {
  if (drop.style.top === 100) {
    clearInterval()
  } else {
    rainButton()
  }
}

const main = () => {
  for (let i = 0; i < drop.length; i++) {
    const li = document.createElement('li')
    li.textContent = drop[i].addEventListener(rainButton)
  }
  drop.addEventListener('click', rainButton)
  drop.addEventListener(resetDrop)
}

document.addEventListener('DOMContentLoaded', main)
