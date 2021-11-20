for(let number=1;number<=100;number+=1)
{
    if(number%3==0)
        if(number%5==0)
            console.log("FizzBuzz");
        else
            console.log("Fizz");
    else
        if(number%5==0)
            console.log("Buzz");
        else
            console.log(number);

}