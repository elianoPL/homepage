let footer = document.querySelector('.footer--js');
let text = "&copy; Eliano 2020";
footer.innerHTML = text;


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