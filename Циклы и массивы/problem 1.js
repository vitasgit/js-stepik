function print(arr){
    let count = 1;
    
    for (let val of arr) {
        let firtsHalf = val[0].toUpperCase();
        let secondHalf = val.slice(1);
        
        console.log(count + ": " + firtsHalf + secondHalf);
        count += 1;
    }
}