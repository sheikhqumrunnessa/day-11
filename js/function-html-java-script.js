var additionBtn=document.getElementById('addition');
additionBtn.onclick=function () {
var firstNumberValue=Number(document.getElementById('firstNumber').value);
var secondNumberValue=Number(document.getElementById('secondNumber').value);
 var result=firstNumberValue+secondNumberValue;
 document.getElementById('result').value=result;
};

var subtractionBtn=document.getElementById('subtraction');
subtractionBtn.onclick=function () {
    var firstNumberValue=Number(document.getElementById('firstNumber').value);
    var secondNumberValue=Number(document.getElementById('secondNumber').value);
    var result=firstNumberValue-secondNumberValue;
    document.getElementById('result').value=result;
};
var multiplicationBtn=document.getElementById('multiplication');
multiplicationBtn.onclick=function () {
    var firstNumberValue=Number(document.getElementById('firstNumber').value);
    var secondNumberValue=Number(document.getElementById('secondNumber').value);
    var result=firstNumberValue*secondNumberValue;
    document.getElementById('result').value=result;
};
var divisionBtn=document.getElementById('division');
divisionBtn.onclick=function () {
    var firstNumberValue=Number(document.getElementById('firstNumber').value);
    var secondNumberValue=Number(document.getElementById('secondNumber').value);
    var result=firstNumberValue/secondNumberValue;
    document.getElementById('result').value=result;
};
var remainderBtn=document.getElementById('remainder');
remainderBtn.onclick=function () {
    var firstNumberValue=Number(document.getElementById('firstNumber').value);
    var secondNumberValue=Number(document.getElementById('secondNumber').value);
    var result=firstNumberValue%secondNumberValue;
    document.getElementById('result').value=result;
};
var concateBtn=document.getElementById('concate');
concateBtn.onclick=function () {
    var firstNumberValue=document.getElementById('firstNumber').value;
    var secondNumberValue=document.getElementById('secondNumber').value;
    var result=firstNumberValue+' '+secondNumberValue;
    document.getElementById('result').value=result;
};
var btnElement=document.getElementById('Reset');
btnElement.onclick=function () {
    var firstNumberValue= document.getElementById('firstNumber').value=" ";
    var secondNumberValue= document.getElementById('secondNumber').value=" ";
    var resultvalue=document.getElementById('result').value=" ";
    document.getElementById('Reset').value=Reset;
};





var btnElement = document.getElementById('btn');
      btnElement.onclick= function () {
    var firstNameValue=document.getElementById('firstName').value;
    var lastNameValue=document.getElementById('lastName').value;
    var fullName=firstNameValue+' '+lastNameValue;
    document.getElementById('fullName').value=fullName;
};


//    var btnElement=document.getElementById('btn');
//    alert(btnElement);

//
//var btnElement=document.getElementById('z');
//   alert(btnElement);



//    function demo(){
//        document.write('Hello Bangladesh');
//    }
//function demo() {
//        var  firstName='Rubel';
//        var  lastName='Khan';
//        var  fullName=firstName+' '+lastName;
//        document.write(fullName);
//        }
//
//function demo(firstName, lastName) {
//
//    var fullName = firstName + ' ' + lastName;
//    document.write(fullName);
//}
//        document.write('<br/>=========<br/>');
//         demo('Imran', 'Hossain');
//        document.write('<br/>=========<br/>');
//        demo('Maruf', 'Hossain');
//        document.write('<br/>=========<br/>');
//        demo('Mehedi', 'Hasan');

//    document.write('<br/>=========<br/>');
//    demo();
//    document.write('<br/>=========<br/>');
//    demo();
//    document.write('<br/>=========<br/>');
//    demo();




