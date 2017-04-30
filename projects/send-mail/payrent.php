<?php
	//mgr.Burgundy@cormorantco.com
	$to = "baotr1340@gmail.com";
	$subject = "326 - Please run my card <eom>";

	$message = "";

	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// More headers
	$headers .= 'From: <btran1340@gmail.com>' . "\r\n";
	$headers .= 'Cc: me@baotran.xyz' . "\r\n";

	mail($to,$subject,$message,$headers);
?>