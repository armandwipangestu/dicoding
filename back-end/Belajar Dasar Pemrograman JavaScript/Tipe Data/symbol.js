/*
Symbol:
	Symbol adalah tipe data baru yang dikenalkan pada ES6. Tipe data Symbol digunakan untuk
	menunjukan indentifier yang unik. Ketika membuat Symbol, kita bisa memberikan deskripsi
	atau nama Symbol seperti ini:
*/

const id = Symbol("id");
console.log(id); // Output: Symbol(id)

/*
	Symbol disebut sebagai indentifier yang unik karena meskipun kita membuat dua variable Symbol
	dengan nama atau deskripsi yang sama, kedua nilainya tetap dianggap berbeda. Contohnya lihat kode
	berikut:
*/

const id2 = Symbol("id");

console.log(id == id2); // Output: false

// Symbol ini umumnya digunakan sebagai nama property dari Object. Object sendiri merupakan tipe data
// kompleks untuk menyimpan berbagai struktur data. Kita akan segera bertemu dan mempelajari tentang
// object pada modul Data Structure.
