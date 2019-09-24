

// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let result = document.getElementById('result');
// let url = 'https://api.themoviedb.org/3/movie/76240?api_key=2d22ad7d881ee9d239a142943ae8567e';
// //let movieURL = 'https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=de-DE&region=DE&release_date.gte=2016-11-16&release_date.lte=2016-12-02&with_release_type=2|3';
// //https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos
// //https://api.themoviedb.org/3/movie/343611?api_key={api_key}&append_to_response=videos

// let myData = {};

// fetch(url)
// .then(function(res) {
// 	return res.json();
// 	//console.log(res);
// })
// .then(function(data) {
// 	myData = data;
// 	//console.log(myData);
// })

// button.addEventListener('click', buildSelect);

// function buildSelect(outputData) {
	
// 	let output = document.createElement('div');
// 	//d.forEach(function(item) {
// 		let p = document.createElement('p');
// 		//console.log(item);
// 	//})

// 	p.textContent = myData.id;
// 	output.appendChild(p);
// 	console.log(myData);
// 	//console.log(tempURL);
// 	console.log(output);
// 	result.appendChild(output);
// 	let tempVal = "/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg";
// 	let tempURL = 'https://image.tmdb.org/t/p' + myData.backdrop_path;
// 	document.querySelector('img').src = tempURL;


// }














let APIKEY = '2d22ad7d881ee9d239a142943ae8567e';
let baseURL = 'https://api.themoviedb.org/3/';
let configData = '';
let baseImageURL = '';
let button = document.querySelector('button');
let input = document.querySelector('input');

let getConfig = function () {
	let url = baseURL.concat('configuration?api_key=', APIKEY);
	fetch(url)
	.then((result) => {
		//console.log(result);
		return result.json();
	})
	.then((data) => {
		baseImageURL = data.images.secure_base_url;
		//configData = data.images;
		console.log('config:', data);
		console.log('config fetched');
	})
	.catch(function(err) {
		alert(err);
	});

}

button.addEventListener('click', runSearch);

 function runSearch() {
	let url = baseURL.concat('search/movie?api_key=', APIKEY, '&query=', input.value);
	fetch(url)
	.then(result=>result.json())
	.then((data)=>{
		console.log(data);
		console.log(JSON.stringify(data, null, 4));
		document.querySelector('img').src = baseImageURL + 'w300' + data.results[0].poster_path;
		document.querySelector('h2').innerHTML= data.results[0].title;
		document.querySelector('p').innerHTML= data.results[0].overview;
		document.querySelector('span').innerHTML= data.results[0].release_date;
		document.querySelector('.lang').innerHTML = data.results[0].original_language;



	})
}

document.getElementById('button').addEventListener('click', displayInfo);

function displayInfo() {
	document.getElementById('infoWrap').style.display='inline-block';
	document.getElementById('gallery-2').style.display='inline-block';
}

document.addEventListener('DOMContentLoaded', getConfig);

