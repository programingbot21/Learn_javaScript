function myFun(){
    let x = document.getElementById("inp").value ;
    try {
        if(x == "") throw "input is Empty"
        if(isNaN(x)) throw "Please Enter the number"
        if(x < 5) throw "Enter the greater NUmber"
        if(x > 20) throw "Enter the less number"
        else{
            document.querySelector("h1").innerHTML="Number is : " + x ;
                }
    } catch (error) {
        console.log(error)
    }finally{
        console.log("programing is Excuting" )          
    }
}

// finally condition is excute both condtion error in non error