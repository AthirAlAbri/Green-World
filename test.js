
//this function works to valisate the email and display a msg is it is valid or not
function email_validation() {
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg");
  
    //this is a pattern for email 
    var pattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if(email.match(pattern)) {
      msg.innerHTML = "Email is valid.";  
    }
    else {
      msg.innerHTML = "Email is invalid.";
    }
  }


//this function works to valisate the name and display a msg is it is valid or not
  function name_validation() {
    var name = document.getElementById("name").value;
    var msg = document.getElementById("msg");

    //this is a pattern for name
    var pattern = /[^0-9]/;

    if( name.match(pattern)) {
        msg.innerHTML = "Name is valid.";
      }
      else {
        msg.innerHTML = "Name is invalid.";
        alert("Name is invalid")
      }
  }


//this function validate the age and display is in a propriate sentense
  function display() {
    //display age 
    if(document.getElementById('age1').checked) {
        document.getElementById("disp").innerHTML
            = "Your age is less than 18!"; 
    }
    else if(document.getElementById('age2').checked) {
        document.getElementById("disp").innerHTML
        = "Your age is between 18 and 25!";
; 
    }
    else if(document.getElementById('age3').checked) {
        document.getElementById("disp").innerHTML
            = "Your age is between 25 and 35!";
    }
    else if(document.getElementById('age4').checked){
        document.getElementById("disp").innerHTML
            = "Your age is greater than 35";
    }
    else{
        document.getElementById("dispRed").innerHTML
        = "You did not choose any thing!!";
    }
}


//validate the impression
function impression_validation() {
  let impression = document.getElementById("impression")
  var pattern = /-1/
  if(impression.value.match(pattern))
  {   //if nothing choosen nothing will happend
      return false;
  }else{
    //if something is choosen will alert
    alert("Thank you for your impression")
  }
}


//this function validate the feedback 
function feedback_validation(){
    
    let feedback = document.getElementById("feedback");
  
    //this is a pattern for feedback and alert if feedback has these charecters
    var pattern = /[!#$%&'*+/,@%-=<>]/; 
    if(feedback.value.match(pattern)) {
      alert("Please enter a valid feedback..");
      feedback.focus();
      return false;


    }
}