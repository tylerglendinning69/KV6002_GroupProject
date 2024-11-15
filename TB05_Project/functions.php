<?php
//Display error messages, to help with debugging.
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function makeStart($title) 
{
	echo '<!doctype HTML>';
	echo '<html lang="en">';
	echo '<head> ';
		echo '<link href="KF5002Assignment.css" rel="stylesheet">';
		echo '<meta charset="UTF-8">';
		echo '<title>'. $title .'</title>';
	echo '</head>';
	echo '<body>';
}

//reuseable end of page
function makeEnd() 
{
	echo '</body>';
	echo '</html>';
}

?>