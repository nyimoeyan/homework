let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let symbol = document.querySelector("#symbol");
let equal = document.querySelector("#equal");
let ans= document.querySelector("#ans");
let err= document.querySelector("#error");
let res;

equal.addEventListener("click",function(){
   
    if(num1.value == ""){
        err.innerText = "Please enter num 1!";
    }else {
        if (num2.value == ""){
            err.innerText="Please enter num 2!";
        }else{
            err.innerText = "";
            

            switch(symbol.value){

                case'+':
                 res=(parseInt(num1.value) + parseInt(num2.value));
                  break;

                case'-':
                 res=(parseInt(num1.value) - parseInt(num2.value));
                  break;
            
                case'x':
                 res=(parseInt(num1.value) * parseInt(num2.value));
                  break;

                case'/':
                 res=(parseInt(num1.value) / parseInt(num2.value));
                  break;

                case'%':
                 res=(parseInt(num1.value) % parseInt(num2.value));
                  break;
                

                default:
                    console.log(error);
                break;

            }
            ans.innerText = res;

        }
    }
});