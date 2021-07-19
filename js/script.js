


function generateAkanName(){
  
  var weekDays = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday"];
  var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"]
  var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"]
  var birthday= document.getElementsById("birthday").value;
  var genders = document.getElementsByName("gender");
  var birthDate = new Date(birthday);
  var dayOfWeek = birthDate.getDay();
  

  if(birthday === ""){
    alert(`You should enter a valid date. e.g 01/01/1900`);
  }
  else 
  {
    for(var i = 0; i < genders.length; i++){
      if(genders[i].checked){
        if(genders[i].value === "Male"){
          alert(`Your were born on ${weekDays[dayOfWeek]} and your Akan Name is ${maleNames[dayOfWeek]}`);
        }
        else{
          alert(`Your were born on ${weekDays[dayOfWeek]} and your Akan Name is ${femaleNames[dayOfWeek]}`);
        }
        break;
      }
      else{
        alert(`You have not selected your gender`);
      }
    }
  }
}  
