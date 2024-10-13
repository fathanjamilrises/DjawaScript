// Fetch Data Offline dan Online


// // A. Online
// fetch("https://raw.githubusercontent.com/MahesaRadithyaPriady/latihan-fetch/refs/heads/main/data.json")
// .then(response => response.json())
// .then(data => console.log(data[1].name))



const body = document.body;
const container = document.getElementById("root");
const p = document.createElement('p');


fetch("https://raw.githubusercontent.com/MahesaRadithyaPriady/latihan-fetch/refs/heads/main/data.json")
.then(response => response.json())
.then(data =>  {
	p.innerHTML=`Nama Saya : ${data[1].name} `
container.append(p)
})



