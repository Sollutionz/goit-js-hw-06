const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients")
// const div = ingredients.map(ingredient => {
//   const elem = document.createElement('li')
//   elem.textContent = ingredient
//   elem.classList.add('item')
//   return elem
// })

// Оба варианта оказались рабоичими)))

const div = []
for (const elem of ingredients) {
  const liElem = document.createElement("li")
  liElem.textContent = elem 
  liElem.classList.add('item')
  div.push(liElem)
} 
ul.append(...div)