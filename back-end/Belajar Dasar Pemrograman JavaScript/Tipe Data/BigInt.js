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

console.log(bigNumber); // Output: 1234567890123456789012345678901234567890n
console.log(myInt); // Output: 1.2345678901234568e+39

/*
	Meskipun digunakan untuk menyimpan angka dengan nilai besar, namun BigInt tetap
	bisa digunakan untuk nilai yang lebih kecil.
*/

const bigIntButSmall = 7n;

/*
	Kita juga bisa menggunakan BigInt untuk operasi aritmatika pada umumnya. Yang
	membedakan adalah pada operasi pembagian, hasilnya akan dibulatkan ke bawah dan
	tanpa mengandung nilai desimal, Contohnya adalah seperti ini:
*/

// console.log(`5n + 2n: ${5n + 2n}`); // Output: 7n
// console.log(`5n - 2n: ${5n - 2n}`); // Output: 3n
// console.log(`5n * 2n: ${5n * 2n}`); // Output: 10n
// console.log(`5n / 2n: ${5n / 2n}`); // Output: 2n (Bukan 2.5n)
// console.log(`5n % 2n: ${5n % 2n}`); // Output: 1n

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);
