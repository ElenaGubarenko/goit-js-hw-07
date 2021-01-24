const categoriesClasses = document.querySelectorAll(".item")

const howManyCategories = () => {
  console.log(`В списке ${categoriesClasses.length} категории.`)
}

const childNames = (arr) => {
  arr.forEach((element) => {
    console.log(`Количество элементов: ${element.children[1].childElementCount}`)
    console.log(`Категория: ${element.children[0].textContent}`)
  })
}

howManyCategories(categoriesClasses)
childNames(categoriesClasses)
