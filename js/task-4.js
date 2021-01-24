let counterValue = 0

const divRef = document.querySelector("#counter")
const counterRef = document.querySelector("#value")
const decrementBtn = divRef.firstElementChild
const incrementBtn = divRef.lastElementChild

const decrement = () => {
  counterValue = counterValue - 1
  return (counterRef.textContent = counterValue)
}

const increment = () => {
  counterValue = counterValue + 1
  return (counterRef.textContent = counterValue)
}

console.log(counterValue)

decrementBtn.addEventListener("click", decrement)
incrementBtn.addEventListener("click", increment)
