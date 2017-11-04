<?php
	$headers = array("Upcoming Releases", "Now Playing", "Popular", "Top Rated");
	$queries = array("upcoming", "now_playing", "popular", "top_rated");
?>

<!doctype html>
<html lang="en">
	<head>
		<link rel="stylesheet" href="assets/docs.theme.min.css">
		<link rel="stylesheet" href="assets/owl.carousel.css">
		<link rel="stylesheet" href="assets/owl.theme.default.min.css">
	</head>
	<style>
		.featurette-container .featurette-carousel .item img{
			height: 650px;
			width: 90%;
			margin: auto;
		}

		.featurette-container .featurette-carousel .item span{
			position: absolute;
			z-index: 99;
			bottom: 20px;
			margin-left: 5%;
			width: 25%;
		    letter-spacing: -1px;
		    background: rgba(0, 0, 0, 0.7);
		}

		.featurette-container .featurette-carousel .item h2{
			color: white;
			padding-left: 5%;
		}

		.carousel-container {
			width:90%;
			margin: auto;
		}
		.carousel-container .owl-carousel .item img{
			width:200px;
			height:285px;
			position: relative;
		}
		.carousel-container .owl-carousel .item:hover span{
			top: 20%;
			opacity: .9;
		}
		.carousel-container .owl-carousel .item span{
			position: absolute;
			top: 100%;
			left: 0px;
			width: 100%;
			height: 100%;
			background-color: white;
			opacity: .5;
			transition: all .5s;
		}
		.carousel-container .owl-carousel .item span h4{
			text-align: center;
			margin-top: 15px;
			margin-bottom: 0px;
			padding-left: 3px;
			padding-right: 3px;
			font-size: 20px;
		}
		.carousel-container .owl-carousel .item span h5{
			font-size: 14px;
			margin-top: 5px;
			padding-left: 10px;
			padding-right: 10px;
		}
	</style>
	<body>
		<!-- Populate the featurette carousel with images from the images folder -->
		<div class="featurette-container">
			<div class="featurette-carousel">
				<?php
					$service_query = $queries[0];
					include dirname(__DIR__)."/movies-database/service/request.php";
					$results = $response->results;

					foreach ($results as $r){
						echo "<div class='item'>
								<span>
									<h2>".$r->title."</h2>
									<h3>".$r->tagline."</h3>
								</span>
								<img src='https://image.tmdb.org/t/p/w1280".$r->backdrop_path."'>
							</div>";
					}
				?>
			</div>
		</div>
		<div class="carousel-container">
			<?php
				//Print the movies
				for ($x=0; $x < count($headers); $x++){
					echo "<h3>".$headers[$x]."</h3>
							<div class='owl-carousel'>";

					if ($x != 0){ // Skip b/c already set above
						$service_query = $queries[$x];
						include dirname(__DIR__)."/movies-database/service/request.php";

						$results	= $response->results;
					}

						foreach ($results as $r){
							echo "<div class='item'>
									<a href='movie_page.php?id=".$r->id."'>
										<img src='https://image.tmdb.org/t/p/w500".$r->poster_path."'>
										<span>
											<h4>".$r->title."</h4>
											<h5>".$r->overview."</h5>
										</span>
									</a>
								</div>";
						}
					echo "</div>";
				}
			?>
		</div>

		<!-- JQuery Framework -->
		<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
		<!-- Owl Carousel Plugin -->
		<script src="js/owl.carousel.js"></script>
		<script src="js/owl.carousel.min.js"></script>
		<script>
			$(document).ready(function(){
				$('.featurette-carousel').owlCarousel({
					loop:true,
					items: 1,
					dots: true,
					autoplay: true,
					autoplayHoverPause: true
				});
				$('.owl-carousel').owlCarousel({
				    loop:true,
				    margin:10,
				    nav:true,
				    dots:false,
				    responsive:{	//The number of items to display based on screen size
				        0:{
				            items:1,
				            slideBy:1
				        },
				        600:{
				            items:3,
				            slideBy:3
				        },
				        1000:{
				            items:5,
				            slideBy:5
				        },
				        1200:{
				        	items:6,
				        	slideBy:6
				        },
				        1400:{
				        	items:7,
				        	slideBy:7
				        },
				        1500:{
				        	items:8,
				        	slideBy:8
				        }
				    }
				});
			});
		</script>
	</body>

</html>
