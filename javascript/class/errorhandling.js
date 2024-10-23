document.getElementById('button').addEventListener('click',function(){
    try{
        console.log("Block of code where we except error");
        const value=document.getElementById('demo').value;
        if(value.trim===''){
            document.querySelector('#p').innerHTML="Number is empty ";
            throw "Number is empty";
        }
        else if(isNaN(value)){
            document.querySelector('#p').innerHTML="Not a Number";
            // throw is used to throw custom errors
            throw "Not a Number";
        }
        else if(value<5){
            document.querySelector('#p').innerHTML="Number is too small";
            throw "Number is too small";
        }
        else if(value>10){
            document.querySelector('#p').innerHTML="Number is too high";
            throw "Number is too high";
        }
        else{
            document.querySelector('#p').innerHTML="Valid Number"

        }  

    }
    catch(err){
        // console.log("handling error");
        console.log(err);

    }
    finally{
        console.log("Finally block executes irrespective of error");

    }
}
)