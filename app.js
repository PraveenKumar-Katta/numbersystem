// code for finding prime numbers from the array
const numbers = [3,7,2,15,9,20,5,14,12,1,8,11,6,19,4,10,17,13,16,18];
let primeNumbers=[];
let max=numbers[0];
let min =numbers[0];
let sum=0;
//max code
for(let i=1;i<numbers.length;i++){
    if(numbers[i]>max){
        max=numbers[i];
    }

}
console.log(max)
//min code
for(let i=1;i<numbers.length;i++){
    if(numbers[i]<min){
        max=numbers[i];
    }

}
console.log(min);
//sum code
for(let i=1;i<numbers.length;i++){
    sum+=i;

}
console.log(sum);

//prime number code
for(let i=0;i<numbers.length;i++){
    let count=0;
    for(let j=1;j<numbers;j++){
        if(numbers[i]%j==0){
            count+=1
        }
    }
}
if(count==2){
    primeNumbers.push(numbers[i])
}
console.log(primeNumbers);