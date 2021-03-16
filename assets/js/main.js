// Creare un oggetto che descriva uno studente,
// con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in
// tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//Creazione oggetto studente
var studente = {
  'nome' : 'Francesco',
  'cognome' : 'Porti',
  'eta' : 27
};

// console.log(studente);

//Stampo a schermo con il ciclo for in
for (var key in studente) {
  console.log(studente[key]);
}

//Creo array di oggetti di studenti

var studenti = [
  {
    'nome' : 'Andre',
    'cognome' : 'Pitti',
    'eta' : 17
  },
  {
    'nome' : 'Elisabetta',
    'cognome' : 'Maffi',
    'eta' : 24
  },
  {
    'nome' : 'Federico',
    'cognome' : 'Lapis',
    'eta' : 31
  },
  {
    'nome' : 'Franca',
    'cognome' : 'Villa',
    'eta' : 45
  },
];

for (var key in studenti) {
  console.log(studenti[key].nome + ' ' + studenti[key].cognome);
}
