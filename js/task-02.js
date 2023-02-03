const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients")
for (const elem of ingredients) {
  const liElem = document.createElement("li")
  liElem.textContent = elem 
  liElem.classList.add('item')
  ul.appendChild(liElem)
} 