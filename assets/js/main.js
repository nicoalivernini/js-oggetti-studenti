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

//Stampo a schermo con il ciclo for in
var primoStudente = '';

for (var key in studente) {
  primoStudente += studente[key] + ' ';
}
$('#studente').text(primoStudente);


//Creo array di oggetti di studenti
var studenti = [
  {
    'nome' : 'Andrea',
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

//Uso il ciclo for in e stampo nome e cognome di tutti gli studenti
var printStudenti = '';
for (var key in studenti) {
  printStudenti += studenti[key].nome + ' ' + studenti[key].cognome + ' ';
}
$('#studenti').text(printStudenti);

//Seleziono il bottone di Invio
$('button').click(function(){
  var nome = $('#nome').val();
  var cognome = $('#cognome').val();
  var eta = $('#eta').val();

  //Salvo dati in un nuovo oggetto
  var nuovoStudente = {
    nome : nome,
    cognome : cognome,
    eta : parseInt(eta),
  }

  //Pusho oggetto nell'array
  studenti.push(nuovoStudente);

  //Stampo studenti con età e con quello inserito dall'utente
  var printStudenti = '';
  for (var key in studenti) {
    printStudenti += studenti[key].nome + ' ' + studenti[key].cognome + ' ' + studenti[key].eta + ' ';
  }
  $('#studenti-aggiornato').text(printStudenti);
});
