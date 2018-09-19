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

<?php
  //соединение с базой данных при помощи функции mysql_connect()
  //в аргументах функции укажите имя сервера, логин и пароль. 
  $db = mysql_connect("сервер","логин","пароль");
  //функция mysql_select_db() выбирает текущую 
  //базу данных с именем "komtet_test"
  mysql_select_db("komtet_test" ,$db);
  //функция mysql_query() выполняет запрос на выборку данных 
  //результирующий набор данных хранится в переменной $sql
  $sql = mysql_query("SELECT * FROM links" ,$db);
  //после получения данных начнём формирование HTML-таблицы 
  echo ("<table border ='1'>");
  //выводим строку заголовков 
  echo ("<tr><td>Адрес</td><td>Описание</td></tr>");
  //функция mysql_fetch_row() извлекает одну строку из результата 
  //и сохраняет её в массиве $tablerows
  while ($tablerows = mysql_fetch_row($sql))
  {
  //теперь в цикле для каждой полученной строки сделаем вывод 
  //$tablerows[1] соответствует полю "url" 
  //$tablerows[2] соответствует полю "description" 
  echo("<tr><td><a href="/info/tech/$tablerows[1]">$tablerows[1]
        </a></td><td>$tablerows[2]</td></tr> ");
  }
  echo "</table>";
  //закрытие соединение (рекомендуется)
  mysql_close($db);
  ?>
