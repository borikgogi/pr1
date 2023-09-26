function getMathResult(digit, count) {
    let str="";
    if(typeof(count)==="number" && count > 0 ){
        for(let i=1; i<=count; i++){
            
            str+=digit*i;
            if(i!=count) str+="---";
        } 
    }
    return str;
}


console.log(getMathResult(3,5));