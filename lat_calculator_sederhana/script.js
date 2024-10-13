let input1 = prompt ("masukkan angka pertama");
let input2 = prompt ("masukkan angka kedua");
let inputPerhitungan = prompt ("masukkan operator perhitungan");

let angkaConvert1 = parseFloat(input1);
let angkaConvert2 = parseFloat (input2);

function perhitungan (a,b) {
    switch (inputPerhitungan) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
    }
}

let perhitunganHasil = perhitungan(angkaConvert1, angkaConvert2);
console.log(perhitunganHasil);

document.title = "Async Function"


p.appenD

