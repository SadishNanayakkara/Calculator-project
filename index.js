let operation;
let previous;


function f1(){
    let previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML=previous+1;
}
function f2(){
    let previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML=previous+2;
}
function f3(){
    let previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML=previous+3;
}
function f4(){
    let previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML=previous+4;
}
function f5(){
    let previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML=previous+5;
}
function f6(){
    let previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML=previous+6;
}
function f7(){
    let previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML=previous+7;
}
function f8(){
    let previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML=previous+8;
}
function f9(){
    let previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML=previous+9;
}
function f0(){
    let previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML=previous+0;
}
function f00(){
    let previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML=previous+"00";
}
function fdot(){
    let previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML=previous+".";
}
function fadd(){
    previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML="";
    operation=1;
}
function fsub(){
    previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML="";
    operation=2;
}
function fmul(){
    previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML="";
    operation=3;
}
function fdev(){
    previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML=""; 
    operation=4;
}
function fpersentage(){
    previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML="";
    operation=5;
}
function feq(){
    let after=document.getElementById("answer").innerHTML;
    let equal;
    if(operation==1){
        document.getElementById("answer").innerHTML=parseFloat(previous)+parseFloat(after); 
    }
    else
    {
        if(operation==2){
            document.getElementById("answer").innerHTML=parseFloat(previous)-parseFloat(after); 
        }
        else{
            if(operation==3){
                document.getElementById("answer").innerHTML=parseFloat(previous)*parseFloat(after); 
            }
            else{
                if(operation==4){
                    document.getElementById("answer").innerHTML=parseFloat(previous)/parseFloat(after); 
                }
                else{
                    if(operation==5){
                        document.getElementById("answer").innerHTML=parseFloat(previous)/100;
                    }
                    else{
                        document.getElementById("answer").innerHTML="Invalid."; 
                    }
                }
            }
        }
    }
}
function fac(){
    let previous=document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML="  ";
    operation="";
    previous="";
    after="";
}
function fdel(){
    let previous=document.getElementById("answer").innerHTML;
    let del = previous.slice(0,-1);         // delete one by one number.
    document.getElementById("answer").innerHTML=del;
}