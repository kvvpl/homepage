// alert("hello");
console.log("hello console");
// const footer = document.querySelector('.dupa');
const footer = document.querySelector(".main__section--js");
console.log(footer);
footer.innerHTML = "A to jest tekst z JS";
console.log(footer);

const powitanie = (imie, wiek) => {
  console.log(`Witaj ${imie} o wieku ${wiek}`);
}

powitanie("Bartek", 47);

const hamburger = document.querySelector('.button-js');
console.log(hamburger);
hamburger.addEventListener('click',(e)=>{
  const navigation = document.querySelector('.navigation--js');
  navigation.classList.toggle('navigation__open');
})
