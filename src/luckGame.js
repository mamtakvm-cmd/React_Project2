var a= Math.random()*(100-1)+1;
console.log(a);
var b= prompt("enter a number");
if(a==b)
console.log("Win");
else
console.log("Loose");
switch(a){
case a=1 :
    {
        console.log("4 chances remaining");
        a++;
    }
    case a=2 :
    {
        console.log("3 chances remaining");
        a++;
    }
    case a=3 :
    {
        console.log("2 chances remaining");
        a++;
    }
    case a=4 :
    {
        console.log("1 chance remaining");
        a++;
    }
    case a=5 :
    {
        console.log("Game Over");
        
    }
    default:
        console.log("Invalid")

}
