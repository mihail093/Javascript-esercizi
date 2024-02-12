/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
Con l'espressione 'datatype in Javascripr' si intende i tipi di dato esistenti in Javascript.
Questi ultimi vengono definiti 'dati primitivi' in quanto sono immutabili, pienamente rappresentati dal loro valore associato,
non contengono metodi e non sono oggetti.
I principali datatype in JavaScript comprendono:
-NUMERI: interi o decimali che sono compresi tra un massimo e un minimo.
Il limite superiore di rappresentazione coincide con il numero che otteniamo digitando 'Number.MAX_VALUE' mentre
il limite inferiore di rappresentazione (corrispettivo numero con segno negativo) coincide con il numero che otteniamo 
digitando 'Number.MIN_VALUE'.
-STRINGHE: sequenze di caratteri racchiuse tra virgolette.
-Booleans: restituiscono come valori 'true' o 'false'. 
Vengono utilizzati per confrontare due o più condizioni ed ottenerne il valore di verità.
-Undefined: indica l'assenza di valore di una variabile. 
Una variabile può essere semplicemente dichiarata senza assegnarle un valore, in questo caso 
se la variabile viene richiamata restituirà il datatype 'undefined'.
-Null: anche quest'ultimo indica l'assenza di valore ma in questo caso, a differenza di 'undefined', 
l'assenza di valore è stata volontariamente associata alla variabile.
-BigInt: venne introdotto in Javascript in aggiunta al datatype 'Number' per rappresentare numeri di grandi dimensioni.
Viene utilizzato per rappresentare numeri interi arbitrariamente grandi; in altre parole 'BigInt' può rappresentare 
qualsiasi numero intero senza limiti superiore o inferiore.
'BigInt' condivide alcune caratteristiche con i tipi di dati primitivi ma ha anche alcune peculiarità che lo distinguono da essi
(a differenza dei tipi di dati primitivi tradizionali come stringhe, numeri e booleani, questo è un tipo di dati primitivo non primitivo, 
in quanto consente l'accesso a metodi e funzioni specifiche associate ad esso).
Le operazioni eritmetiche tra 'BigInt' e 'Number' non sono supportate direttamente; questo significa che bisogna prima convertire uno dei due 
operandi nel tipo appropriato. Inoltre, 'BigInt' non supporta gli operatori di incremento (++), decremento (--) o altri operatori unari.
La presenza di una 'n' alla fine di un numero (ad esempio 100n anziché 100) indica che il numero viene trattato come 'BigInt' e non come 'Number'.
-Symbol: venne introdotto per fornire una nuova dimensione di unicità ed immutabilità agli identificatori.
Vengono creati utilizzando la funzione globale 'Symbol()'; ogni simbolo creato in questo modo è unico, il che significa che due simboli avranno 
sempre riferimenti diversi, anche se hanno lo stesso identificatore.
Inoltre, può essere aggiunta una descrizione opzionale 'Symbol("descrizione")' utilizzata solo per scopi di debug 
e non influisce sull'unicità del simbolo. 
Vengono utilizzati per definire proprietà "private" e comportamenti speciali all'interno degli oggetti.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/*
Un oggetto è una struttura di dati complessa.
Ogni oggetto può contenere da zero a molte 'proprità' ed ogni singola 'proprietà' è composta da coppie 'chiave-valore'.
La 'chiave' è il "nome" della proprità mentre il 'valore' è effettivamente il "valore" di quella specifica proprietà.
Il valore di una proprietà può essere qualsiasi tipo di dato: un array, una funzione, un valore primitivo o persino un altro oggetto.
In sintesi gli oggetti possono essere utilizzati per organizzare e manipolare dati in modo strutturato e coerente. 
Sono fondamentali nella programmazione JavaScript e sono utilizzati ampiamente per rappresentare concetti complessi e strutture dati dinamiche.
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*
let somma = 12 + 20;
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*
let x = 12;
*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*
let name = "Mihajlo";
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*
let sottrazione = 4 - x
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/*
let name1 = "john";
let name2 = "John";
console.log(name1 !== name2);
console.log(name1 === name2.toLowerCase());
*/

/* Esercizio 8
 Crea un oggetto in Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby)
*/

/*
let persona = {
    nome: "Mihajlo",
    cognome: "Radosavljevic",
    hobby: "letteratura",
};
*/
