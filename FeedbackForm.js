function validatename(){
    var fullname= document.getElementById("fullname").value;
    if (fullname != ""){
        document.getElementById("nameprompt").innerHTML = "<strong>VALID</strong>";
    }
    else{
        document.getElementById("nameprompt").innerHTML = "<strong>INVALID</strong>";
    }
}
function validatephonenumber(){
    var phonenumber = document.getElementById("phonenumber").value;
    var reg1 = /^\d{3}-\d{3}-\d{4}$/;
    if (reg1.test(phonenumber)){
        document.getElementById("phonenumberprompt").innerHTML = "<strong>VALID</strong>";
        return true;
    }
    else{
        document.getElementById("phonenumberprompt").innerHTML = "<strong>INVALID</strong>";
        return false;
        
    }
}
function validateemail(){
    var email = document.getElementById("email").value;
    var reg2 =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(reg2.test(email)){
        document.getElementById("emailprompt").innerHTML = "<strong>VALID</strong>";    }
    else{
        document.getElementById("emailprompt").innerHTML = "<strong>INVALID</strong>";    }
}
function review(){
    var comment = document.getElementById("review").value;
    if(comment.length>100){
        document.getElementById("reviewprompt").innerHTML = "Not under 100 characters"
    }
}