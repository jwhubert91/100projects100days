<?php

	if ($_GET["city"]) {

		$cityString = $_GET["city"];
		$_GET['city'] = str_replace(' ', '-', $_GET['city']);

		$forecast_page = file_get_contents("https://www.weather-forecast.com/locations/".$_GET["city"]."/forecasts/latest");

		$pageArray = explode('<h2>'.$cityString.' Weather Today</h2> (1&ndash;3 days)</span><p class="b-forecast__table-description-content"><span class="phrase">',$forecast_page);

		$secondPageArray = explode('</span></p></td>',$pageArray[1]);

		$weather = $secondPageArray[0];

		$error = false;

		if ($weather == "") {
			$error = true;
			$weather = "<strong>We could not find data for ".$cityString.". Please try again.</strong>";
		}

	}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>PHP Weather Scraper</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<style>
		html { 
			background: url("background.jpg") no-repeat center center fixed; 
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;
			margin: 0;
			padding: 0;
		}
		body {
			background: none;
		}
		.container {
			text-align: center;
			margin-top: 50px;
		}
		h1 {
			color: white;
		}
		form {
			margin: 50px auto;
		}
		.two-thirds-width {
			width: 500px;
		}
		form p {
			color: white;
			font-size: 120%;
		}
	</style>
</head>
<body>

	<div id="header" class="container">

		<h1>Weather Lookup</h1>
		<form class="two-thirds-width">
			<div class="form-group">
				<label for="city"><p>Enter the name of a city:</p></label>
				<input type="text" name="city" class="form-control" id="city" placeholder="New York, London, San Francisco, etc." aria-describedby="citySearch">
			</div>
			<button type="submit" class="btn btn-primary">Search</button>
		</form>

		<div id="weather-output" class="container two-thirds-width">
			<?php
				if (($error == false) && ($cityString)) {
					echo
					'<div class="alert alert-primary" role="alert">
						'.'<p><strong>3 Day Weather forecast for '.$cityString.':</strong></p>'.$weather.'
					</div>
					';
				}
				if ($error == true) {
					echo
					'<div class="alert alert-danger" role="alert">
						'.$weather.'
					</div>
					';
				}
			?>
		</div>

	</div>

	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	
</body>
</html>

