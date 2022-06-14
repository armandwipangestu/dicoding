/*
	NOTE: Operator ini dapat dituliskan sebelum atau sesudah variable, tetapi hal tersebut bukan berarti sama, Berikut ketentuannya:
		- Jika dituliskan setelah variable (x++), expression akan menghasilkan nilai variable sebelum ditingkatkan nilainya.
		- Jika dituliskan sebelum variable (++x), expression akan menghasilkan nilai variable setelah ditingkatkan nilainya.
*/

let postfix = 5;
console.log(postfix++); // Output: 5
console.log(postfix); // Output: 6

let prefix = 5;
console.log(++prefix); // Output: 6
