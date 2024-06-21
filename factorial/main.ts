function Factorial(n:number):number{
    if(n===0||n===1){
        return 1
    }else{
        let result = 1;
        for(let i = 2; i<=n;i++){
            result *= i;
        }
        return result
    }
}

console.log(Factorial(9))