// function mymenu() {
//     var x = document.getElementById("menu");
//     if(x.style.display== "block"){
//         x.style.display = "none";
//     }
//     else{
//         x.style.display = "block";
//     }
// }

function content(){
      window.location.href="about.html";
}
function team(){
    window.location.href="team.html";
}

function book(){
    window.location.href="booking.html";
}


function test1(){
    //retreving data
var fid = document.getElementById("fname1").value;
var lid = document.getElementById("lname1").value;
var mailid = document.getElementById("email1").value;
var numberid = document.getElementById("number1").value;
var slotid = document.getElementById("inputGroupSelect01").value;
var messageid = document.getElementById("message1").value;

alert("yipee....!! booking done sucessfully");

//storing data

var fname = sessionStorage.setItem("fid", fid);
var lname = sessionStorage.setItem("lid", lid);
var mail = sessionStorage.setItem("mailid", mailid);
var number = sessionStorage.setItem("numberid", numberid);
var slot = sessionStorage.setItem("slotid", slotid);
var message = sessionStorage.setItem("messageid", messageid);

}

function test2(){

var fid2 = document.getElementById("fname2").value;
var lid2 = document.getElementById("lname2").value;
var mailid2 = document.getElementById("email2").value;
var numberid2 = document.getElementById("number2").value;
var messageid2 = document.getElementById("message2").value;

alert("Thanks for fill. will reach you out in a while");

//storing data

var fnme2 = sessionStorage.setItem("fid2", fid2);
var lnme2 = sessionStorage.setItem("lid2", lid2);
var email2 = sessionStorage.setItem("mailid2", mailid2);
var mnumber2 = sessionStorage.setItem("numberid2", numberid2);
var inmessage2 = sessionStorage.setItem("messageid2", messageid2);


}

function contact(){

    var fid3 = document.getElementById("fname3").value;
    var lid3 = document.getElementById("lname3").value;
    var mailid3 = document.getElementById("email3").value;
    var numberid3 = document.getElementById("number3").value;
    var messageid3 = document.getElementById("message3").value;
    
    alert("Message sent sucessfully...!!");
    
    //storing data
    
    var fnme3 = sessionStorage.setItem("fid3", fid3);
    var lnme3 = sessionStorage.setItem("lid3", lid3);
    var email3 = sessionStorage.setItem("mailid3", mailid3);
    var mnumber3 = sessionStorage.setItem("numberid3", numberid3);
    var inmessage3 = sessionStorage.setItem("messageid3", messageid3);
    
    
    }