let nama = "Fathan Jamil";
let kelas = "XI PPLG 3";
let bio = "Saya Adalah Seorang Front End Developer";
let usia = 18;
let nis = 1234567890;
let belumDewasa = "Saya Belum Dewasa";
let Dewasa = "Saya Sudah Dewasa";

function umur(a,b,c){
    if (a > 17){
        return b;
    }else{
        return c;
    }
}




console.log(`Nama Saya : ${nama}, Kelas : ${kelas}, Umur : ${usia}, Dan Saya ${umur(usia,Dewasa,belumDewasa)}  Nis : ${nis}, Bio : ${bio}`);
