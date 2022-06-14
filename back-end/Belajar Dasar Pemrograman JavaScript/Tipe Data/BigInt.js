/*
BigInt:
	Pada JavaScript, tipe data "Number" hanya mencakup nilai dari -(2^53 - 1) hingga (2^53 - 1).
	Untuk kebutuhan umum, sebenarnya nilai tersebut sudah sangat cukup. Namun, akan ada kebutuhan
	tertentu di mana kita membutuhkan cakupan nilai yang lebih besar, seperti kriptografi atau
	menentukan waktu hingga presisi microsecond.

	Untuk nilai di luar Number, kita bisa menggunakan tipe BigInt. Untuk membedakan tipe BigInt
	dan Number, tambahkan karakter "n" di akhir angka. Contohnya adalah seperti kode di bawah ini.
	Bandingkan dengan yang bertipe Number.
*/

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/
