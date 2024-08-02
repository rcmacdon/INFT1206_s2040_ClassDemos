/*******************************************
* Title:   INFT1206-05 Week 12 Demo
* Author:  Clint MacDonald
* Date:    July 30, 2024
* Purpose: Client Side Form Validation
*******************************************/
           
function validateForm() {
    var name = document.forms['contactForm']['name'].value;
    var email = document.forms['contactForm']['email'].value;
    var phone = document.forms['contactForm']['phone'].value;

    // assume innocent unless proven guilty...

    // 1 test at a time and reject submission upon failure

    // TEST 1 - all fields are required
    if (name == '' || email == '' || phone == '') {
        alert('ALL fields are required!');
        return false;  // cancel submission
    }

    // TEST 2 - Email is of a proper format
    var atPosition = email.indexOf("@");
    var dotPosition = email.lastIndexOf(".");
    // console.log("Clint");
    // alert('Position of @:' + atPosition);
    // alert('Position of .:' + dotPosition);
    if (atPosition < 1 || dotPosition < atPosition + 2  || dotPosition + 2 >= email.length ) {
        alert('A valid email is required!');
        return false;
    }

    // TEST 3 - phone number
    if (isNaN(phone) || phone.length != 10) {
        alert("A valid phone number (without symbols) is required!");
        return false
    }


    return true;
}
