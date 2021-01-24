const inputRef = document.querySelector("#name-input")
const spanRef = document.querySelector("#name-output")

const addingName = (event) => {
  console.dir(event)
  event.target.value ? (spanRef.textContent = event.target.value) : (spanRef.textContent = "незнакомец")
}

inputRef.addEventListener("input", addingName)
