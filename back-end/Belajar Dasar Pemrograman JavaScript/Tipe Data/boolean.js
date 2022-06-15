/*
Boolean:
	Boolean hanya memiliki dua nilai, yaitu "true" dan "false". Tipe data ini menjadi kunci utama dalam
	penentuan logika. Kita akan banyak menggunakan nanti dalam materi if/else statement. Untuk
	menetapkan nilai boolean pada variable, gunakan keyword "true" atau "false" seperti dibawah ini.
*/

const x = true;
const y = false;

console.log(typeof x); // Output: boolean
console.log(typeof y); // Output: boolean

/*
	Kita juga bisa menggunakan operator komparasi seperti lebih dari (>) atau kurang dari (<). Contohnya:
*/

const a = 10;
const b = 12;

const isGreater = a > b;
const isLess = a < b;

console.log(isGreater); // Output: false
console.log(isLess); // Output: true
