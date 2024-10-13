let tahunLahir = prompt ("masukkan tahun lahir anda");
let tahunIni = 2024;
let tahunLahirConvert = parseInt (tahunLahir);

function hitungUsia(a){
    return tahunIni - a;
}

let usia =  hitungUsia(tahunLahirConvert);
console.log (usia);