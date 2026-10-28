const getResult = (score) => {
    if(score > 70) 
        return "Pass";
    else 
    return "fail";
}


console.log(getResult(78));
console.log(getResult(90));