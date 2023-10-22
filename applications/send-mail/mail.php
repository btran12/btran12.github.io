<?php
 
if(isset($_POST['email'])) {
 
	//Retrieve data from HTML
    $name = $_POST['name']; // Sender name
    $email_from = $_POST['email']; // Sender email
	$email_to = $_POST['email-to']; //Recipient email
	$email_subject = $_POST['subject'];  //The subject of the email
    $email_message = $_POST['comments']; // Sender message
 
     
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
 
 
<!-- include your own success html here -->

<script>
window.open("/", "_self");
window.alert("Message Sent Successfully!");
</script>
 
 
<?php
 
}
 
?>