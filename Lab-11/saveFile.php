$data = $_POST['_data'];
$f = fopen('login.json', 'w+');
fwrite(f, $data);
fclose($f);
