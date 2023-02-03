const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients")
const div = document.createElement('div')
for (const elem of ingredients) {
  const liElem = document.createElement("li")
  liElem.textContent = elem 
  liElem.classList.add('item')
  div.appendChild(liElem)
} 
ul.appendChild(div)