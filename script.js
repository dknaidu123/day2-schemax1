function clr(){
    document.getElementById("disp").value="";
}
function add(val){

    var x = document.getElementById("disp").value;
    if(x.length <= 14){
    document.getElementById("disp").value=x+val;
    }
    else{
        document.getElementById("disp").value=x+'';
    }
}
function rslt()
{
    var x= document.getElementById("disp").value;
    try{
        document.getElementById("disp").value=eval(x);
    }
    catch(err){
        document.getElementById("disp").value="Invalid Syntax";
    }
}