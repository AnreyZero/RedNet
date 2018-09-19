
var num = prompt("Введите номер задания: 1,3,5,6,11");
if(num ==1){
var name1 = prompt("Введите ваше имя");
var name2 = prompt("Введите имя 2 пользователя");
alert("Приветствую вас "+ name1+" и "+name2);
}
else if (num ==3){
	var name = prompt("Введите имя")
	var ear = prompt("Введите возраст")
	if(ear<=5){
	alert("Привет "+ name+" тебе "+ear+" лет")
	}
	else{
		alert("Привет "+ name+" тебе "+ear+" год")
	}
}
else if (num ==5){
	var number = prompt("Введите  число");
	var number1 = prompt("Введите  число");
	var number2 = prompt("Введите  число");
	alert("Максимальное число = "+Math.max(number1,number2,number));
}
else if (num ==6){
	function nuForm(){
		var tn = document.nu.tn;
		var tn1 = document.nu.tn1;
		var t = tn+tn1;
		alert(t);
	}
	var bat = document.nu.bn;
	bat.addEventListener("click",nuForm)
}
else{
	alert("Не ввели номер задания");
}


/*function sendForm(){
var t = document.one.txt;
var text = t.value;
if(text.length<=5){
	alert("Увы но он слишком мал");
	
}
else{
	alert("Ну лучше чем ничего");
}
}
var batton = document.one.but;
batton.addEventListener("click",sendForm);*/
