<?php
	$to = "b.qtran12@gmail.com";
	$subject = "Apt 326 - Please run my card <eom>";

	$message = "
		<html>
			<body>
				<h3>This is an automated message</h3>
				<p>For any questions please reply to this email or call me at (413) 626-3714</p>
				<p>Bao Tran</p>
			</body>
		</html>
	";

	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// More headers
	$headers .= 'From: <btran1340@gmail.com>' . "\r\n";
	$headers .= 'Cc: <baotranomatic@gmail.com>' . "\r\n";

	mail($to,$subject,$message,$headers);
?>
