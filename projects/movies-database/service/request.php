<?php

$query=$service_query;
$api_key    = "4c40b76e885cbdd0161087ef43a8fce5";
if (!isset($pageNum)) { $pageNum= 1; }
$defaultUrl = "https://api.themoviedb.org/3/movie/".$query."?page=".$pageNum."&language=en-US&api_key=".$api_key;

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => $defaultUrl,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_POSTFIELDS => "{}",
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  $response = json_decode($response);
}

?>
