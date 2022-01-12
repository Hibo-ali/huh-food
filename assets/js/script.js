
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});

// Worldwide Restaurants API Documentation

//Using jQuery

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://worldwide-restaurants.p.rapidapi.com/search",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
		"x-rapidapi-key": "f83c15caa2msha51f2f23ac42efap17ecb6jsn5f142198f5dc"
	},
	"data": {
		"language": "en_US",
		"limit": "10",
		"location_id": "75220",
		"currency": "USD"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

var searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", function(){
	$.ajax(settings).done(function (response) {
		var dataInfo = response.results.data;
		for ( var i = 0; i < dataInfo.length; i++){
			var info = document.createElement("a");
			info.textContent = dataInfo[i].write_review;
			document.querySelector(".results").appendChild(info);
		}
		console.log(response);
	});
});

