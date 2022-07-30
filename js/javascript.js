//Titles: http://www.omdbapi.com/?s=thor&page=1&apikey=546c2681
//key: 546c2681

const movieSearchBox = document.querySelector('#movie-search-box');
const searchList     = document.querySelector('#search-list');
const resultGrid     = document.querySelector('#result-grid');

//load movies from API
async function loadMovies(searchTerm) {
	const URL =  `http://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=546c2681`;
	const res = await fetch(`${URL}`);
	const data = await res.json();
	//console.log(data.Search);
	if(data.Response =='True')
	displayMovieList(data.Search);
}

function findMovies() {
	let searchTerm = (movieSearchBox.value).trim();
	if(searchTerm) {
		searchList.classList.remove('hide-search-list');
		loadMovies(searchTerm);
	} else {
		searchList.addEventListener('hide-search-list');
	}
}

function displayMovieList(movies) {
	searchList.innerHTML = '';
	for(let idx = 0; idx < movies.length; idx++) {
		let movieListItem = document.createElement('div');
		console.log(movieListItem);
	}
}
