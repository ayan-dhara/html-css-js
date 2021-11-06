const body = document.body
body.addEventListener('click', (e) => {
  createRadiation(e.clientX, e.clientY)
})

const createRandomRadiation = () => {
  createRadiation(window.innerWidth * Math.random(), window.innerHeight * Math.random())
  setTimeout(createRandomRadiation, Math.random() * 2000)
}

const createRadiation = (x, y) => {
  const radiation = document.createElement('div')
  const radiationTimer = 1 + Math.random() * 2
  radiation.classList.add('radiation')
  radiation.style.left = `${x}px`
  radiation.style.top = `${y}px`
  body.appendChild(radiation)
  setRadiation(radiation)
  radiation.style.setProperty("--color", radiationColors[Math.floor(radiationColors.length * Math.random())])
  radiation.style.setProperty("--timer", radiationTimer + "s")
  setTimeout(() => {
    radiation.remove()
  }, radiationTimer * 1000)
}
const radiationColors = ["red", "blue", "yellow", "green"]
const setRadiation = (radiation) => {
  const radiationCount = Math.floor(Math.random() * 10) + 20
  for(let i = 0; i < radiationCount; i++){
    // const angle = (180 * i / radiationCount) - 180
    const angle = (360 * i / radiationCount)
    const subRadiation = document.createElement('div')
    subRadiation.classList.add('sub-radiation')
    radiation.appendChild(subRadiation)
    subRadiation.style.setProperty("--angle", angle + "deg")
  }
}

createRandomRadiation()
