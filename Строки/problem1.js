function beginWith(str, subs){
    var result;
    
    str = str.toLowerCase();
    subs = subs.toLowerCase();
    
    result = str.startsWith(subs);
    

    return result;   
}