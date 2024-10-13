document.title = "Async Function"



// 	function fetchData(){

// 	let waktu = 2000;
// 	return new Promise((resolve,reject)=>
// 		setTimeout(()=>{
// 			if(waktu < 3000){
// 				resolve("Berhasil menambahkan data")
// 			}else{
// 				reject("Request Timeout")
// 			}
// 		})
// 		)
// }

//  fetchData()
//  .then(response => console.log(response))
//  .catch(response => console.log(response))



function getUserData(user){
	return new Promise((resolve,reject)=>
		setTimeout(()=>{
			if (user){
				console.log("User Ditemukan");
				resolve(user);
			}else{
				reject("Data tidak Ditemukan")
			}
		},1000)
	)
}

getUserData()
.then(response => console.log(response))
.catch(response => console.log(response));

