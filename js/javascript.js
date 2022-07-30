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
	console.log(data);
}

loadMovies('lord of the rings');