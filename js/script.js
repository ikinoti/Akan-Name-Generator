function generateAkanName() {
  var dob = document.getElementById("dob").value;
  var dob = new Date(dob);
  var name = '';
  var gender = '';

  function radioValue() {
      var gndr = document.getElementsByName('gender');

      for (i = 0; i < gndr.length; i++) {
          if (gndr[i].checked){
              gender = gndr[i].value;
          }
          break;
      }
      return gender;
  }

  gender = radioValue();
  // document.getElementById("genderp").innerHTML = gender;


  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var maleNames = new Array(7);
  maleNames[0] = "Kwasi";
  maleNames[1] = "Kwadwo";
  maleNames[2] = "Kwabena";
  maleNames[3] = "Kwaku";
  maleNames[4] = "Yaw";
  maleNames[5] = "Kofi";
  maleNames[6] = "Kwame";

  var femaleNames = new Array(7);
  femaleNames[0] = "Akosua";
  femaleNames[1] = "Adwoa";
  femaleNames[2] = "Abenaa";
  femaleNames[3] = "Akua";
  femaleNames[4] = "Yaa";
  femaleNames[5] = "Afua";
  femaleNames[6] = "Ama";


  console.log(typeof(gender));

  if (gender == "Male") {
      name = maleNames[dob.getDay()];
  } else if (gender == "Female") {
      name = femaleNames[dob.getDay()];
  } else {
      name = "Wrong";
  }

  document.getElementById("description").innerHTML = "You were born on " + weekday[dob.getDay()] + " and your Akan name is " + name;


  return false;
  
}
// function clearAkanMessage(){
//   document.getElementById("description").innerHTML = "";
//   return true;
// }



