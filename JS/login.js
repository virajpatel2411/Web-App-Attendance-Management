var x = localStorage.getItem("count");
var cnt = 0;
if(x == 0)
cnt=0;
else
cnt = x;

function page()
{
if(document.getElementById("t1").value=="virajpatel@gmail.com" && document.getElementById("t2").value=="vPatel")
{
window.open("index.html","_self");
}
}

var x = localStorage.getItem("course1");
if(x=="true"){
document.getElementById('b1').disabled=true;
}
else{
document.getElementById('b1').disabled=false;
}

var x = localStorage.getItem("course2");
if(x=="true"){
document.getElementById('b2').disabled=true;
}
else{
document.getElementById('b2').disabled=false;
}

var x = localStorage.getItem("course3");
if(x=="true"){
document.getElementById('b3').disabled=true;
}
else{
document.getElementById('b3').disabled=false;
}

var x = localStorage.getItem("course4");
if(x=="true"){
document.getElementById('b4').disabled=true;
}
else{
document.getElementById('b4').disabled=false;
}

var x = localStorage.getItem("course5");
if(x=="true"){
document.getElementById('b5').disabled=true;
}
else{
document.getElementById('b5').disabled=false;
}


function display1()
{
localStorage.setItem("course1","true");
alert("You have registered for the course AB-101!!!")
b1.disabled=true
cnt=cnt+1
localStorage.setItem("count",cnt);
}

function display2()
{
localStorage.setItem("course2","true");
alert("You have registered for the course AB-102!!!")
b2.disabled=true
cnt=cnt+1
localStorage.setItem("count",cnt);
}

function display3()
{
localStorage.setItem("course3","true");
alert("You have registered for the course AB-103!!!")
b3.disabled=true
cnt=cnt+1
localStorage.setItem("count",cnt);
}

function display4()
{
localStorage.setItem("course4","true");
alert("You have registered for the course AB-104!!!")
b4.disabled=true
cnt=cnt+1
localStorage.setItem("count",cnt);
}

function display5()
{
localStorage.setItem("course5","true");
alert("You have registered for the course AB-105!!!")
b5.disabled=true
cnt=cnt+1
localStorage.setItem("count",cnt);
}

