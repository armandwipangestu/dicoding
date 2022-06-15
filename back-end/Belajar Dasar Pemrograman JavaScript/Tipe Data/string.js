/*
Strings:
	Tipe data selanjutnya adalah string yang merupakan sebuah teks. Untuk menetapkan nilai
	sebagai string pada variable gunakan tanda petik satu ('') atau petik dua ("") di antara
	teksnya. Contohnya:
*/

let greet = "Hello";
console.log(typeof greet); // Output: string

/*
	Tidak ada perbedaan antara menggunakan petik satu atau petik dua. Anda dapat menggunakan
	tanda petik secara bergantian, khususnya jika anda memiliki teks yang mengandung tanda petik.
*/

const question = '"What do you think of JavaScript?" I asked';
console.log(question); // Output: "What do you think of JavaScript? I asked"

/*
	Problem: Lalu bagaimana jika teks memiliki dua tanda petik seperti ini?
*/

//const answer = '"I think it's awesome!" he answered confidently'
//console.log(answer)

// Tentunya kode di atas akan menghasilkan error. Solusinya, gunakan backslash (\) untuk mengurangi
// ambiguitas dalam tanda petik. Mekanisme ini juga dikenal dengan nama escape string. Sehingga kode
// diatas akan menjadi seperti berikut:

const answer = '"I think it\'s awesome!" he answered confidently';

// Backslash sebelum tanda petik akan memberitahukan interpreter bahwa itu hanyalah tanda petik dan
// tidak boleh ditafsirkan sebagai pembatas string. Selain tanda petik, backslash juga berguna untuk
// mengabaikan simbol lain yang menimbulkan ambigu di dalam string. Contohnya seperti backslash itu
// sendiri.

console.log("Windows path: C:\\Program Files\\MyProject"); // Output: Windows path: C:\Program Files\MyProject

/*
	Pada string, kita juga dapat menggunakan operator (+). Operator tersebut berfungsi untuk menggabungkan
	dua teks yang terpisah menjadi satu buah teks. Contohnya seperti ini:
*/

const greetText = "Hello";
const moreGreet = greetText + greetText;
console.log(moreGreet); // Output: HelloHello

/*
	Ingat, string concatenation seperti di atas akan menggabungkan string apa adanya, sehingga jika Anda
	ingin menggabungkan dua kata atau lebih perlu menambahkan spasi sendiri.

	Selain concatenation, string pada JavaScript juga mendukung string interpolation. Sederhananya, kita
	bisa memasukkan variable ke dalam sebuah string tempalte. Contohnya adalah seperti berikut:
*/

const myName = "Arman";
console.log(`Hello, my name is ${myName}`); // Output: Hello, my name is Arman
