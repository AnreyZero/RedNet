?php
	//Пример синтаксиса для подключения к базе данных (PHP и MySQL).
	
	//Подключение к базе данных
	
	$hostname="your_hostname";
	$username="your_dbusername";
	$password="your_dbpassword";
	$dbname="your_dbusername";
	$usertable="your_tablename";
	$yourfield = "your_field";
	
	mysql_connect($hostname,$username, $password) or die ("html>script language='JavaScript'>alert('Не удается подключиться к базе данных. Повторите попытку позже.'),history.go(-1)/script>/html>");
	mysql_select_db($dbname);
	
	# Проверка наличия записи
	
	$query = "SELECT * FROM $usertable";
	
	$result = mysql_query($query);
	
	if($result){
		while($row = mysql_fetch_array($result)){
			$name = $row["$yourfield"];
			echo "Name: ".$name."br/>";
		}
	}
?>
