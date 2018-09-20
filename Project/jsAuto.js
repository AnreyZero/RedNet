// var Name = document.one.Name;
// var Familu = document.Familu;
// var Otchestvo = document.Otchestvo;
// var Gorod =document.Gorod;
// document(Name+" "+Familu+" "+Otchestvo+" "+Gorod);
function autoForm(){
var Name = document.getElementById("names").value;
var Familu = document.getElementById("familu").value;
	if(Name=="Андрей"&&Familu == "Морозов"||Name=="Фарид"&&Familu== "Алисанов"){
		document.location.href ="Test.html"
		alert("Добро пожаловать повелитель");
	}
	else if(Name==""||Familu==""){
		alert("Что-то забыли ввести");
	}
	else{
		alert("А ты собственно кто?");
	}	
} 
function regForm(){
	 var rName = document.getElementById("rname").value;
	 var rFamilu = document.getElemetById("rfamilu").value;
	 var rOtchest = document.getElemetById("rothestv").value;
	 var rGorod = document.getElemetById("rgorod").value;
}