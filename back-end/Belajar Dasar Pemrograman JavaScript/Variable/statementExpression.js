// Error karena "let lastName" adalah sebuah statement untuk deklarasi variable. Statement tidak bisa berada di posisi expression.
//let fullName = let lastName

// "(lastName = 'Dwi Pangestu')" merupakan expression, sehingga kode ini tidak error.
let fullName = (lastName = "Dwi Pangestu");

// "Arman" + "Dwi Pangestu" juga merupakan expression, sehingga kode ini tidak error
// let fullName = "Arman" + "Dwi Pangestu";

console.log(fullName);
