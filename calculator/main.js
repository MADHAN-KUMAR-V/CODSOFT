let input = document.getElementById("input");

let calculate = (number) =>{
    input.value += number;
}

function clr(){
    input.value = " ";
}
function del(){
    input.value=input.value.slice(0,-1);
}

let result = ()=>{
    try{
        input.value = eval(input.value);
    }
    catch(err){
        alert("undefined value");
    }

}