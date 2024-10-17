function solve(input){
    let fisrtNum = input[0];
    let secondNum = input[1];
 
    print = '';
 
 
    for (let i = fisrtNum[0]; i <= secondNum[0]; i++) {
        if (i % 2 !== 0){

            
           
            for (let j = fisrtNum[1]; j <= secondNum[1]; j++) {
                if (j % 2 !== 0){
              
                    for (let k = fisrtNum[2]; k <= secondNum[2]; k++) {
                        if (k % 2 !== 0){
 
                            for (let z = fisrtNum[3]; z <= secondNum[3]; z++) {
                                if (z % 2 !== 0){
                                print += `${i}${j}${k}${z} `
                                
                                }
                            }
                        }
                        
                    }
                }
                
            }
        }
        
    }
console.log(print);
 
}