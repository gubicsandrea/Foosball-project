/**
/*Összes játékos nevét tartalmazó tömb
*/
var players = [
'Barbay Ádám',
'Bodóczky Mihály',
'Czető Márton',
'Decsics Gergely',
'Diera Andor',
'Hadiné Gubics Andrea',
'Hallak Hella',
'Molnár László',
'Németh Zoltán',
'Rátkay András',
'Sándor Zoltán Péter',
'Soltesz Alexander',
'Szabó Erik Márk',
'Szabó Péter',
'Szilberhorn Zoltán',
'Taigiszer Dóra',
'Timpfel Gábor',
'Tóth Sára',
'Mező Imre',
'Koncz Gergely'];
/**
/* Véletlenszerű párosítással kialakult csapatokat tartalmazó tömb,
/* minden eleme egy {csapatnev: 'szin', tamado: 'jatekosnev', vedekezo: 'jatekosnev', pont: egész} szerkezetű objektum
*/

var csapatok = [];

/**
/* Az összes lehetséges párosítást tartalmazó tömb,
/* minden eleme {csapat1: csapatsorszám, csapat2: csapatsorszám} szerkezetű objektum
*/

var parositasok = [];

/**
/* Az aktuális játékot játszó párosítás a párositas[] tömbből,
/* minden eleme {csapat1: csapatsorszám, csapat2: csapatsorszám} szerkezetű objektum
*/

var aktualisMeccs;

/**
/* Az összes lejátszott meccs eredményét tartalmazó tömb,
/* minden eleme egy {csapat1: csapatsorszám, csapat2: csapatsorszám, gol1: egész, gol2: egész} szerkezetű objektum
*/

var meccsek = [];

var csapatNevek = [
'piros',
'sárga',
'sötétkék',
'barna',
'fekete',
'lila',
'narancssárga',
'rózsaszín',
'szürke',
'bordó',
'fehér',
'sötétzöld',
'világoskék',
'arany',
'türkiz',
'ezüst',
'világoszöld',
'magenta',
'vörös',
'skarlát'
];

