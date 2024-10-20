/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20 

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random()*21)  
  
console.log(random)
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = [{
  name: "Anna",
  surname: "Landi",
  age: "21",
}]
console.log("Me", me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age
console.log("new me", me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
let skills = ["HTML","CSS"]
me.skills = skills
console.log("me con skills", me)
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
skills.push("JavaScript")
console.log("dopo js", me)
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

skills.pop()
console.log("dopo delete js", me)


// Funzioni
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function(){
  return Math.floor(Math.random()*6 +1)
}
console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (n1,n2) {
   if(n1 < n2){
    return n2
   } else {
    return n1
   }
}
console.log(whoIsBigger(10,30))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function (str){
  return str.split(" ")
}
console.log(splitMe("Ciao sono Anna Landi"))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function(str, deleteFirst) {
  if (deleteFirst) {
    return str.slice(1)// rimuove la prima lettera
  } else {
    return str.slice(0, -1)//rimuove l'ultima lettera
  }
}

console.log(deleteOne("Buongiorns", true))
console.log(deleteOne("Buongiorns", false))


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = function(str){
  for (let i = 0; i <= 9; i++) { //uso un for per controllare la stringa
    str = str.replaceAll(i.toString(), '') //con il metodo toString faccio diventare i numeri delle stringhe e con  replaceAll sostituisco tutti i numeri incontrati nel ciclo 
  }
  return str;
}

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (email) {
  const atIndex = email.indexOf("@")
  const dotIndex = email.lastIndexOf(".")

  return (
    atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length -1 ) //verifico che ci sia un "@" e che dopo ci sia un "." seguito da almeno un carattere
}
console.log(isThisAnEmail("annalandi1106@gmail.com"))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function(){
  const weekDays = [
    "lunedì",
    "martedì",
    "mercoledì",
    "giovedì",
    "venerdì",
    "sabato",
    "domenica"
  ]
  const currentDate= new Date()
  const currentDay= currentDate.getDay() -1
  return weekDays[currentDay]
}
console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (numRolls){
  let sum = 0 
  let estractDiceNumbers = [] // per memorizzare i valori estratti

  for (let i = 0; i < numRolls; i++) {
    const diceNumber = dice()
    sum += diceNumber
    estractDiceNumbers.push(diceNumber)
  }

  return {
    sum: sum,
    estractDiceNumbers: estractDiceNumbers, //restituisce l'oggetto con somma e valori estratti
  }
}
const result = rollTheDices(5)
console.log(result)

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = function (date){
  const pastDate = new Date (date)
  const today = new Date ()
  const differenceInMilliseconds = today - pastDate //sottraggo la data odierna da quella passata (questo modo di risolvere il problema l'ho visto da internet)
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)) //dividiamo per il numero di milliecondi in un gg
  return differenceInDays
}

console.log(howManyDays("2023-10-12"))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function (myBday) {
  const today = new Date ()
  
  const myBirthday = new Date (myBday)
  myBirthday.setFullYear(today.getFullYear()) //imposto dall'anno in cui sono nanta fino a quello attuale in modo da confrontare poi sono il giorno e il mese 
  
  return today.getDate() === myBirthday.getDate() && today.getMonth() === myBirthday.getMonth()
}
console.log(isTodayMyBirthday("2003-06-11")) // false perche manca ancora troppo :(

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const person = {
  name: "Anna",
  age: 21,
  city: "Bolzano"
}
const deleteProp= function (obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop]; 
  }
  return obj; 
}
const updatedPerson = deleteProp(person, "city")
console.log ("dopo delete", updatedPerson)

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function (){
  let newMovie = movies[0]
  for (let i = 0; i < movies.length; i++) {
     if (movies[i].Year > newMovie.Year){
      newMovie = movies[i]
     } 
  }
  return newMovie
}
console.log(newestMovie())

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function(){
  return movies.length
}
console.log(countMovies())

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const moviesYears= [] 

const onlyTheYears = function () {
    for (let i = 0; i < movies.length; i++) {
    moviesYears.push(movies[i].Year)   
    }
}
onlyTheYears()
console.log("movies years", moviesYears)

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function (movies){
  return movies.filter(movie => movie.Year >= 1901 && movie.Year <= 2000)
}
const moviesInLastMillennium = onlyInLastMillennium(movies);
console.log("Movies in the last millennium:", moviesInLastMillennium)

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function(movies){
  let totalYears = 0

  for (let i = 0; i < movies.length; i++) {
    totalYears += Number(movies[i].Year) //ho trasformato le stringhe years in numeri in modo tale da sommare poi il valore di years senza concatenarli
  }
  return totalYears
}
const total = sumAllTheYears(movies)
console.log("Sum of all years:", total)
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function (movies, searchTitle){
  const result = [];
  
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(searchTitle.toLowerCase())) { //ciclo l'array movies e controllo se searchMovies corrisponde al nome del film 
      result.push(movies[i]) // aggiungo il film a result se il titolo corrisponde
    }
  }
  
  return result  // Restituiamo l'array con i film che corrispondono
}
const foundMovies = searchByTitle(movies, "lord")
console.log("Movies found:", foundMovies)
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function (movies, searchTitle){
  const result = {
    match: [],
    unmatch: []   //creo due array per il risultato della funzione
  }
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(searchTitle.toLowerCase())) { 
      result.match.push(movies[i]); // Aggiungiamo a match se c'è una corrispondenza
    } else {
      result.unmatch.push(movies[i]); // altrimenti aggiungiamo a unmatch 
    }
  }
   return result  
  }

  const searchResult = searchAndDivide(movies, "the")
  console.log("Search and divide result:", searchResult)

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function (i){
   movies.splice(i,1) //rimuove l'indice selezionato
   return movies
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selectContainer = function() {
  const containerElement = document.getElementById("container")
  
  // Ritorna l'elemento selezionato
  return containerElement
}

const container = selectContainer()
//console.log(container.textContent)

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selectTd = function (){
   const selectedTd = document.getElementsByTagName('td')

   return selectedTd
} 
const td = selectTd()
//console.log(td)

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const tdText = function() {
  const tdElements = document.querySelectorAll("td")
  for (let i = 0; i < tdElements.length; i++) {
    
    console.log(tdElements[i].textContent)// Stampa il contenuto di ciascun <td> nella console
  }
}
tdText()

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const addBackground = function() {
  
  const links = document.querySelectorAll("a") // seleziono tutti gli elementi di a 

  for (let i = 0; i < links.length; i++) {
                                            
    links[i].style.backgroundColor = "red"
  }
}
addBackground()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addElement() {
  const newElement = document.getElementById("newItem").value
  const li = document.createElement("li") // Creo un nuovo elemento <li>
  li.textContent = newElement
// Aggiungere il nuovo <li> alla lista non ordinata
  document.getElementById("myList").appendChild(li);// Aggiungere il nuovo <li> alla lista non ordinata

  // Ripulire l'input
  document.getElementById("newItem").value = ''
}
//addElement()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function emptyList() {
  const list = document.getElementById("myList");
  
  while (list.firstChild) {
      list.removeChild(list.firstChild);
  }
}
//emptyList()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClassToTr() { 
  const lines = document.querySelectorAll("tr")
  lines.forEach(line => {
      line.classList.add("test")  //  // ho aggiunto la classe "test" a ciascun <tr>
  })
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(height) {
  for (let i = 1; i <= height; i++) { //ciclo da 1 fino all'altezza fornita
      const stars = '*'.repeat(i) //con repeat creo una striga di * con lunghezza definita da i 
      console.log(stars)
  }
}
halfTree(3)
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */


