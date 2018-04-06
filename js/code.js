var books = [
	{
		"id": "book_1",
		"name": "python",
		"category": "",
		"picture_url": "",
		"price": 0
	},
	{
		"id": "book_2",
		"name": "php",
		"category": "",
		"picture_url": "",
		"price": 0
	},
	{
		"id": "book_1",
		"name": "javascript",
		"category": "",
		"picture_url": "",
		"price": 0
	}
];


var albums = [
	{
		"id": "album_1",
		"name": "metallica",
		"category": "",
		"picture_url": "",
		"price": 0
	},
	{
		"id": "album_2",
		"name": "garage inc",
		"category": "",
		"picture_url": "",
		"price": 0
	},
	{
		"id": "album_1",
		"name": "hardwired",
		"category": "",
		"picture_url": "",
		"price": 0
	}
];

var movies = [
	{
		"id": "movie_1",
		"name": "casper",
		"category": "",
		"picture_url": "",
		"price": 0
	},
	{
		"id": "movie_2",
		"name": "the mask",
		"category": "",
		"picture_url": "",
		"price": 0
	},
	{
		"id": "movie_1",
		"name": "home alone",
		"category": "",
		"picture_url": "",
		"price": 0
	}
];

// if(this.value === "categ"){
// The below jQuery function get the data from the form's type search element
// and search through the products arrays 
$(function () {
	$("#search").submit(function (e) {
		var value = $("#search-input").val();
		e.preventDefault();
		for (var i = 0; i < books.length; i++) {
			if (value === books[i].name) {
				alert("Search found in books from within categ value");
				return;
			}
		}
		for (var j = 0; j < movies.length; j++) {
			if (value === movies[j].name) {
				alert("Search found in movies");
				return;
			}
		}
		for (var k = 0; k < albums.length; k++) {
			if (value === albums[k].name) {
				alert("Search found in albums");
				return;
			}
		}
		alert("search not found");
	});
});
// }

$("#user-select").on('change', function () {
	//The above jQuery function take the input from the select options 
	// and return in this.value data type when you select an option
	// the below if conditions search if there is no options selected (i.e default one selected)
	if (this.value === "books") {
		$(function () {
			$("#search").submit(function (e) {
				var value = $("#search-input").val();
				e.preventDefault();
				for (var i = 0; i < books.length; i++) {
					if (value === books[i].name) {
						alert("Search found in books from within books value");
						return;
					}
				}
			});
		});
	}
	// if (this.value === "movies"){
	// 	$(function(){
	// 		$("#search").submit(function(e) { 
	// 	        var value = $("#search-input").val();
	// 	        e.preventDefault();
	// 	        for (var i = 0; i < movies.length; i++) {
	// 	        	if (value === movies[i].name){
	// 	        		alert("Search found in movies");
	// 	        		return;
	// 	        	}
	// 	        }
	// 	    });
	// 	});
	// }
	// if (this.value === "albums"){
	// 	$(function(){
	// 		$("#search").submit(function(e) { 
	// 	        var value = $("#search-input").val();
	// 	        e.preventDefault();
	// 	        for (var i = 0; i < albums.length; i++) {
	// 	        	if (value === albums[i].name){
	// 	        		alert("Search found in albums");
	// 	        		return;
	// 	        	}
	// 	        }
	// 	    });
	// 	});
	// }
});

