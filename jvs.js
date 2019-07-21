var a;
var b;
var c;

var input1 = document.getElementById("quadratic1").value
document.getElementById("submit1").onclick=function(){

    input1=a;
    

}
var input2 = document.getElementById("quadratic2").value
document.getElementById("submit2").onclick=function(){

    input1=b;
    
}
var input3 = document.getElementById("quadratic3").value
document.getElementById("submit3").onclick=function(){

    input1=c;
    
}



var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);      
var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

document.getElementById("check").onclick=function(){

    document.write(result)
    document.write(result2)
    
}





