//因为自动换行，问题解决失败
let size = 8;
for(let row = 1;row <= size;row += 1){
let num1=" "; let num2="#";
    if(row%2){
        for(let number = 1;number <= size;number += 1)
            if(number % 2)
                console.log(num1);
            else
                console.log(num2);
    }
    else{
        for(let number = 1;number <= size;number += 1)
            if(number % 2)
                console.log(num2);
            else
                console.log(num1);
    }
}