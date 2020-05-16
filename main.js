const firstName = "Anna";
const age = "30";

console.log(firstName);
console.log(age);
console.log(`Hejka, nazywam się ${firstName} i mam ${age} lat.`);

const heading = document.querySelector('.banner__header--js');

heading.innerHTML = `Hejka, nazywam się ${firstName} i mam ${age} lat.`;

const emptyParagraph = document.querySelector('.banner__header--js');
emptyParagraph.innerHTML = 'Zrobiłam i uzupełniłam, ale nie mam zielonego pojęcia o co chodzi :(';