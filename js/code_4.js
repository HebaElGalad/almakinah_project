var products = {
	"books" : [
				{
				"id": "book_1",
				"name": "Python",
				"category":"books",
				"picture_url":"images/python.jpg",
				"price": 540,
				},
									{
									"id": "book_2",
									"name": "php",
									"category":"books",
									"picture_url":"images/php.jpg",
									"price": 850
									},

														{
														"id": "book_3",
														"name": "JavaScript",
														"category":"books",
														"picture_url":"images/javascript.jpg",
														"price": 590
														},
			],
	"albums" : [
				{
				"id": "album_1",
				"name": "Metallica",
				"category":"albums",
				"picture_url":"images/metallica.jpg",
				"price": 400
				},
									{
									"id": "album_2",
									"name": "Garage Inc",
									"category":"albums",
									"picture_url":"images/garage_inc.jpg",
									"price": 400
									},
														{
														"id": "album_3",
														"name": "Hardwired",
														"category":"albums",
														"picture_url":"images/hardwired.jpg",
														"price": 400
														}
			],
	"movies" : [
				{
				"id": "movie_1",
				"name": "Casper",
				"category":"movies",
				"picture_url":"images/casper.jpg",
				"price": 450
				},
									{
									"id": "movie_2",
									"name": "The Mask",
									"category":"movies",
									"picture_url":"images/the_mask.jpg",
									"price": 450
									},
														{
														"id": "movie_3",
														"name": "Home Alone",
														"category":"movies",
														"picture_url":"images/home_alone.jpg",
														"price": 450
														}
			]
}; 

$(window).on('load', function(){
	addToPage();
});
function addToPage(){
	var arr = Object.entries(products);
	for (var j = 0; j < Object.keys(products).length; j++) {
		for (var i = 0; i < Object.keys(products).length; i++) {
			var cardContent='<div class="col-4">\
								<div id="'+i+'" class="card p-4 border-0 text-center product" style="width: 18rem;">\
									<img class="card-img-top img"  alt="Card image cap"> \
								  	<div class="card-body"> \
									    <h5 class="card-title name"></h5> \
									    <p class="card-text category"></p> \
									    <a href="details.html" class="btn btn-primary price"></a> \
								  	</div>\
								</div>\
							 </div>'
			$('#products').append(cardContent);
			$('#'+i).attr("id",arr[j][1][i].category+[i+1]);
			$('#'+arr[j][1][i].category+[i+1]).addClass(arr[j][1][i].category);
			$('#'+arr[j][1][i].category+[i+1]+' .name').text(arr[j][1][i].name);
			$('#'+arr[j][1][i].category+[i+1]+' .category').text(arr[j][1][i].category);
			$('#'+arr[j][1][i].category+[i+1]+' .price').text(arr[j][1][i].price);
			$('#'+arr[j][1][i].category+[i+1]+' .img').attr('src',arr[j][1][i].picture_url);
			console.log(arr[j][1][i].picture_url);
		}
	}

}







