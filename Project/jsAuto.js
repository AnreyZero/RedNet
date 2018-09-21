// var Name = document.one.Name;
// var Familu = document.Familu;
// var Otchestvo = document.Otchestvo;
// var Gorod =document.Gorod;
// document(Name+" "+Familu+" "+Otchestvo+" "+Gorod);// var provName = new Array(5);
// for(var i=0;i<provName.length;i++){
// 	provName[i] = Name.substring(i,i+1);
// 	 if(provName[i]=="#")
// 	 {
// 	 	alert(Веден не коректный символ в имени);
// 	 }
// }
// alert(provName[]);
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
	 var rPass = document.getElemetById("rpass").value;
	 var rMail = document.getElemetById("rmail").value;
}