const inputRef = document.querySelector("#validation-input")
const lengthRef = inputRef.attributes[2].value

console.dir(inputRef)
console.dir(lengthRef)
const checkInput2 = (event) => {
  event.target.value.length == lengthRef ? inputRef.classList.toggle("valid") : inputRef.classList.toggle("invalid")
}

inputRef.addEventListener("blur", checkInput2)
