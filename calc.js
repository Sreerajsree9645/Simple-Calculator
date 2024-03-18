function add() {
    var num=0, b=0;
    num= f.txt.value;
    b=num.charAt(num.length-1);
if (b=='+' || b=='-' || b=='/' || b=='*') {
    f.txt.value=num.substring(0,num.length-1);
    f.txt.value+='+';
}
else {
    f.txt.value+='+';
}
}
function sub() {
    var num=0, b=0;
    num= f.txt.value;
    b=num.charAt(num.length-1);
if (b=='+' || b=='-' || b=='/' || b=='*') {
    f.txt.value=num.substring(0,num.length-1);
    f.txt.value+='-';
}
else {
    f.txt.value+='-';
}
}
function div() {
    var num=0, b=0;
    num= f.txt.value;
    b=num.charAt(num.length-1);
if (b=='+' || b=='-' || b=='/' || b=='*') {
    f.txt.value=num.substring(0,num.length-1);
    f.txt.value+='/';
}
else {
    f.txt.value+='/';
}
}function mul() {
    var num=0, b=0;
    num= f.txt.value;
    b=num.charAt(num.length-1);
if (b=='+' || b=='-' || b=='/' || b=='*') {
    f.txt.value=num.substring(0,num.length-1);
    f.txt.value+='*';
}
else {
    f.txt.value+='*';
}
}