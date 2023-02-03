const catElem = document.querySelectorAll(".item")
console.log(`Number of categories: ${catElem.length}`)
for (const cat of catElem) {
    console.log(`Category: ${cat.firstElementChild.textContent}`)
    console.log(`Elements: ${cat.lastElementChild.childElementCount}`);
}