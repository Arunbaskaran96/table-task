// var division = document.createElement("div");
// division.innerHTML="<span class='main1'>this is span</span>";
// division.setAttribute("class","main")
// document.body.append(division)


//2

// var div = document.createElement("div");
// div.setAttribute("class","container")
// var row = document.createElement("div");
// row.setAttribute("class","row")
// var col = document.createElement("div");
// col.setAttribute("class","col")
// col.innerHTML="this is col"
// row.append(col)
// div.append(row)
// document.body.append(div)


// var label=document.createElement("label")
// label.setAttribute("for","email")
// var input=document.createElement("input")
// label.setAttribute("type","email")
// label.setAttribute("id","email")
// var button=document.createElement("button")
// button.innerHTML="Clickme"
// label.append()

// function createLabel(tagname,attname,attvalue,content){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attname,attvalue);
//     ele.innerHTML=content;
//     return ele
// }

// function createInput(tagname,attname,attvalue,attname1,attvalue1,){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attname,attvalue);
//     ele.setAttribute(attname1,attvalue1);
//     return ele
// }


// function createBreak(tagname){
//     var ele=document.createElement(tagname);
//     return ele
// }


// var label1=createLabel("label","for","fname","Firstname")
// var br1=createBreak("br")
// var input1=createInput("input","type","name","id","fname")
// var br2=createBreak("br")

// var label2=createLabel("label","for","mname","Middlename")
// var br3=createBreak("br")
// var input2=createInput("input","type","name","id","mname")
// var br4=createBreak("br")

// var label3=createLabel("label","for","lname","Lastname")
// var br5=createBreak("br")
// var input3=createInput("input","type","name","id","lname")
// var br6=createBreak("br")

// var label4=createLabel("label","for","number","Phonenumber")
// var br7=createBreak("br")
// var input4=createInput("input","type","number","id","number")
// var br8=createBreak("br")




// document.body.append(label1,br1,input1,br2,label2,br3,input2,br4,label3,br5,input3,br6,label4,br7,input4,br8)

// function foo(){
//     var fname=document.getElementById("fname").value
//     var mname=document.getElementById("mname").value
//     var lname=document.getElementById("lname").value
//     var mail=document.getElementById("mail").value
//     var pass=document.getElementById("pass").value
//     console.log(fname,mname,lname,mail,pass)
// }

// function foo(){
//     var int1 =document.getElementById("number").value
//     var int2 =document.getElementById("number1").value
//     console.log(int1*int2)
// }

// function add(){
//     var int1 =document.getElementById("number").value
//     var int2 =document.getElementById("number1").value
//     console.log()  
// }


// var button=document.createElement("button");
// button.innerHTML="Click here"
// button.addEventListener("click",fun)
// document.body.append(button)


// function fun(){
//     var span= document.createElement("span");
//     span.style.color="blue"
//     span.style.fontSize="20px"
//     span.innerHTML="Welcome to guvi"
//     document.body.append(span)
// }





// function createTd(tagname,content){
//     var th=document.createElement(tagname);
//     th.innerHTML=content;
//     document.body.append(td)
// }

// var thh=createTh("thead","tr","th","th","th","First","middle","Last")
// var thh=createTh("tbody","tr","td","td","td","arun","mle","La")


// var tab=document.createElement("table")
// tab.setAttribute("class","table")
// var thh=createTh("thead","tr","th","th","th","First","middle","Last")
// var tdd=createTh("tbody","tr","td","td","td","arun","mle","La")

// tab.append(thh,tdd)
// document.body.append(tab)


function createrow(tagname){
    var ele=document.createElement(tagname);
    return ele
}
function createTh(tagname,content){
    var ele=document.createElement(tagname);
    ele.innerHTML=content
    return ele
}
function createTd(tagname,content){
    var ele=document.createElement(tagname);
    ele.innerHTML=content
    return ele
}

function createHead(tagname,attrname,attrvalue){
    var row=document.createElement(tagname);
    row.setAttribute(attrname,attrvalue)
    return row
}
function createBody(tagname){
    var row=document.createElement(tagname);
    return row
}


var tab=document.createElement("table")
tab.setAttribute("class","table")
var thead=createHead("thead","class","thead-dark")
var row=createrow("tr")
var th1=createTh("th","first")
var th2=createTh("th","second")
var th3=createTh("th","third")
row.append(th1,th2,th3)
thead.append(row)
var body=createBody("tbody")
var row1=createrow("tr")
var th4=createTd("th","Mark")
var th5=createTd("th","otto")
var th6=createTd("th","mdo")
row1.append(th4,th5,th6)
body.append(row1)
tab.append(thead,body)
document.body.append(tab)

// var row=createrow("tr")
// var th1=createTh("th","first")
// var th2=createTh("th","second")
// var th3=createTh("th","third")

// row.append(th1,th2,th3)
// document.body.append(row)