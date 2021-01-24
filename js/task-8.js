let sum = 0
const divRef = document.querySelector("#controls")
const inputRef = divRef.firstElementChild
const btnCreateRef = divRef.children[1]
const btnDellRef = divRef.children[2]
const divBoxRef = document.querySelector("#boxes")
let thirty = 30

const createDiv = function () {
  const newDiv = document.createElement("div")
  newDiv.setAttribute("class", "js-color")
  divBoxRef.appendChild(newDiv)
  newDiv.style.width = `${thirty}px`
  newDiv.style.height = `${thirty}px`
  newDiv.style.backgroundColor = `rgb(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100})`
  console.dir(newDiv)
}

const inputSum = () => {
  sum = inputRef.valueAsNumber
  console.log(sum)
  return sum
}

const createBoxes = function (event) {
  for (let i = 0; i < sum; i += 1) {
    createDiv()
    thirty = thirty + 10
  }
}

const destroyBoxes = function () {
  divBoxRef.innerHTML = " "
}

inputRef.addEventListener("input", inputSum)
btnCreateRef.addEventListener("click", createBoxes)
btnDellRef.addEventListener("click", destroyBoxes)

console.dir(divBoxRef)
