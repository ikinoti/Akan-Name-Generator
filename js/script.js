let CC, YY, MM, DD, d, dayValue;
let dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday"];
let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
let femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
let myForm = document.forms.myForm;
let genders = document.getElementsByName("gender");

year = document.getElementById("birthYear").value;
  CC = parseInt(year.substring(0,2));
  YY = parseInt(year.substring(2,4));
  MM = parseInt(document.getElementById("birthMonth").value);
  DD = parseInt(document.getElementById("birthDate").value);
  d = Math.floor(( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7);

