const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"]

const newList = (arr) => {
  arr.forEach((element) => {
    const newLi = document.createElement("li")
    newLi.textContent = `${element}`
    console.log(newLi)
  })
}

newList(ingredients)
