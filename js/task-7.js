const inputRef = document.querySelector("#font-size-control")
const spanRef = document.querySelector("#text")

const changeByScroll = (event) => {
  spanRef.style.fontSize = `${inputRef.valueAsNumber}px`
}

inputRef.addEventListener("input", changeByScroll)
