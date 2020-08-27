let imie = "ala";
let wiek = 28;

//const uszanowanko = (name, age) => {
function uszanowanko(name, age) {
  if(name.charAt(name.length-1)=="a") {
    name = name.replace(/.$/,"u"); // Babskie imiona będą w odmienione w wołaczu !
  }
  return `Witaj ${name}! Masz ${age} lat.`;
}
console.log(uszanowanko(imie, wiek));

/// a teraz objektowo!
const osoba = {
  age:wiek,
  name:imie,
  powitanie: (name, age) => {
    if(name.charAt(name.length-1)=="a") {
      name = name.replace(/.$/,"u"); // Babskie imiona będą w odmienione w wołaczu !
      
    }
    console.log(`Witaj ${name}! Masz ${age} lat.`);
  }
}
osoba.powitanie(osoba.name, osoba.age)

let button = document.querySelector('.nav__hamburger--js');
let nav = document.querySelector('.nav--js');
 
nav.classList.add('nav--close');
let opened = false;

function opena() {
  nav.classList.toggle('nav--close');
  button.innerHTML = 'x';
  opened = !opened;
  console.log(opened)
  if (opened == false) {button.innerHTML = '≡';}
  return 0;
}

button.addEventListener('click', opena );
//button.addEventListener('click', () => {
//  nav.classList.toggle('nav--close');
//});