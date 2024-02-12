let number1;
let number2;
let operator;

let numArray1=[];
let numArray2=[];

let step =0;
let result=0;
const display=document.getElementById('display');


function pussh(arr,num){
    arr.push(num);
}

function getNumber(num){
    console.log(number1);
    if (step===0 || step===1){
        if(num===99){
            pussh(numArray1,0);
            pussh(numArray1,0);
            number1=Number(numArray1.join(''));
            display.innerHTML =number1;
        }else{
            console.log(number1);
            step=1;
            pussh(numArray1,num);
            number1=Number(numArray1.join(''));
            console.log("number1: "+ number1);
            display.innerHTML =number1;
            console.log('end');
        }
    }
    if (step===2){
        if(num===99){
            pussh(numArray2,0);
            pussh(numArray2,0);
            number2=Number(numArray2.join(''));
            display.innerHTML =number2;
            console.log(number2);

        }else{
            pussh(numArray2,num);
            number2=Number(numArray2.join(''));
            display.innerHTML=number2;
        }
    }
}

function getOperator(ope){
    console.log(ope+"step" +step);
    step=2;
    operator=ope;
    console.log(operator);
}

function calculateEqual(){
    console.log("CAlcukate ");
    if(operator==='+'){ result=number1+number2;}
    if(operator==='*'){ result=number1*number2;}
    if(operator==='/'){ result=number1/number2;}
    if(operator==='-'){ result=number1-number2;}
    display.innerHTML=result;
    console.log(result+"number 1: "+number1+"number2:"+number2);
    number1=result;
    numArray2=[];
    step=1;
    console.log(result+"number 1: "+number1+"number2:"+number2);

}

function ClearDisplay(){
    console.log('Clear'); 
    display.innerHTML='0';
    number1=0;number2=0;operator=null; result=0;step=0;numArray1=[];numArray2=[];
}

function deleteNumber(){
    if(step===0 || step===1 ){
        numArray1.pop();
        number1=Number(numArray1.join(''));
        display.innerHTML=number1;
    }
    if(step===2){
        numArray2.pop();
        number2=Number(numArray2.join(''));
        display.innerHTML=number2;
    }
}

function getRoot(){
    if(step===0 || step===1 ){
        result = Math.sqrt(number1);
        display.innerHTML=(result);
        number1=result;
        console.log(result);
    }
    if(step===2){
        result = Math.sqrt(number2);
    }
}