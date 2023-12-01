const checkAlphabets = (input:string)=> { 
    for (const char of input) { 
        if (!(char >= "a" && char <= "z") && 
            !(char >= "A" && char <= "Z")) { 
            return false; 
        } 
    } 
    return true; 
} 

export default checkAlphabets;