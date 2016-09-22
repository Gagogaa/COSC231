<?php 
	$headers = wordWrap($_POST['header']);
 	$email = wordWrap($_POST['email']);
 	$content= wordWrap($_POST['complaint']);

 mail($email, "complaint ", $content, $header);

?>
<!doctype html>

<html>
	<head>
		<title>thing</title>
	</head>
	<body>
		<form method="POST" action="file.php">
		<label>Email: <input type="textbox" name="email" />
		<textarea name="complaint" cols="40"> </textarea>
		<button>Send</button>
		
		</form>
	</body>

</html>

