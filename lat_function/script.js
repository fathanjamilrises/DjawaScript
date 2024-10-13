// let nama = "Fathan ";
// let umur = 16;
// let pendidikanSaatIni = " SMK";


// function getData (){
//     console.log ("Nama Saya :" + nama + umur + pendidikanSaatIni);
// }

// getData (nama,umur,pendidikanSaatIni)

// function getData2 (a,b,c){
//     console.log ("Nama Saya :" + a + b + c)
// };

// getData (nama,umur,pendidikanSaatIni)


// let bioData = [nama,umur,pendidikanSaatIni]

// function hitungArray (a){
//    console.log("Array ini adalah : " + a.length)
// }

// hitungArray(bioData);


// let item = prompt("Masukkan Item");
// let jumlahItem = prompt("Masukkan Jumlah Barang");
// let hargaPerItem = 1000;

// let jumlah = parseInt(jumlahItem)


// function hitungTotal (a,b){
//     let total = a * b;
//     return total;

// }

// console.log("Anda Membeli " + item + " Seharga " + hitungTotal(jumlah,hargaPerItem))


let currentStock = 20;
let quantity = prompt ("Masukkan Jumlah Produk Yang ingin Anda Beli")

let soldQuantity = parseInt(quantity)

function updateStock (a,b){
    if(a >= b){
        let stock = a - b;
        alert ("Jumlah Barang "+ stock);
    } else{
        alert ("Stok barang habis");
        
    }
    return stock;
}
updateStock (currentStock,soldQuantity);