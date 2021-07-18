let CC, YY, MM, DD, d, dayOfBirth, akanName;
let weekDays = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday"];
let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
let femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
let myForm = document.forms.myForm;


function birthdayDayValue(){
  year = document.getElementById("birthYear").value;
  CC = parseInt(year.substring(0,2));
  YY = parseInt(year.substring(2,4));
  MM = parseInt(document.getElementById("birthMonth").value);
  DD = parseInt(document.getElementById("birthDate").value);
  d = Math.floor(( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7);
  return d;

}

function choosedGender(){
  let genders = document.getElementsByName("gender");

  if (genders[0].checked == true){
    var gender = "male";
  }else if(genders[1].checked == true){
    var gender = "female"
  }else{
    return false;
  }

  switch(gender){
    case "male":
      if(dayOfBirth == 1){
        alert("Your were born on " + weekDays[0] + " and your akan name is " + maleNames[0] + ".");
      }
      else if(dayOfBirth == 2){
        alert("Your were born on " + weekDays[1] + " and your akan name is " + maleNames[1] + ".");
      }
      else if(dayOfBirth == 3){
        alert("Your were born on " + weekDays[2] + " and your akan name is " + maleNames[2] + ".");
      }
      else if(dayOfBirth == 4){
        alert("Your were born on " + weekDays[3] + " and your akan name is " + maleNames[3] + ".");
      }
      else if(dayOfBirth == 5){
        alert("Your were born on " + weekDays[4] + " and your akan name is " + maleNames[4] + ".");
      }
      else if(dayOfBirth == 6){
        alert("Your were born on " + weekDays[5] + " and your akan name is " + maleNames[5] + ".");
      }
      else if(dayOfBirth == -0){
        alert("Your were born on " + weekDays[6] + " and your akan name is " + maleNames[0] + ".");
      }
  }
}