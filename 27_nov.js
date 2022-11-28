var arr = [12, 90, 80, 98, 67, 5, 10]; // 7
//print the array elements on the browser window or console
for(var i=0; i< arr.length; i++)
{
    document.write("<br>"+arr[i]); //executed n times
} //time complexity O(n)

var arr_2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//print elements of a 2D array
for(var i=0; i< arr_2d.length; i++)
{
    for(var j=0; j<3; j++)
   { document.write(arr_2d[i][j]+ " ");   } 
   document.write("<br>");
} // O (9)

// factorial 0 =1 , factorial of 1 =1, 5*4*3*2*1
//n * (n-1) * (n-2)* (n-3) & so on
/* 1. take input from the user
2. declare a variable to store the result
3. using loop for n * (n-1) * (n-2)* (n-3); 5*4*3*2*1
4. print the output
*/

/* function fact(n){
    var result=1;
    for(var i=1; i <=n; i++)
   { result = i* result;} 
   console.log("factorial is "+result);
} 
var n = prompt("Enter a number");
fact(n);
//5*4*3*2*1
/* 5* factorial(4) 5*24
      4* factorial(3) 4*6
         3* factorial(2) 3*2
            2 * factorial(1) 2*1
                1 * factorial(0) 1*1    */

/* function factorial(n){
    if(n==0)
    return 1;
    else { 
    return n* factorial(n-1); }
}
var n = prompt("enter a number ");
console.log("Factorial using recursion is: "+factorial(n)); */

// Fibonnaci series
//0 1 1 2 3 5 8 13 21 34
// find the sum of first n numbers in Fibonnaci series
// print the first n Fibonnaci numbers
/* t1 =0, t2=1
   t3 = t2+t1
        t4 = t3+t2  
            t5 = t4+t3 */
/* function fibo(m)
{
    if(m==0)
    return 0;
    else 
        if( m==1 )
            return 1;
            else
            {  var res= fibo(m-1)+fibo(m-2);
               return res;
            }     }
var m = prompt("enter a number ");
console.log("Sum of first "+m+" numbers :"+fibo(m));
//fibo(0) fibo(1) fibo(2)
for(var j=0; j<=m; j++)
{
    var term = fibo(j);
    console.log(term);
} */
/* prime numbers- check if 10 is a prime number
1. take input from user: n
2. check divisibility by 2 & so on
3. if the number is divisible by any number between 2 to n,
   print that the number is not prime
4. if number is not divisible, increment the divisor */

function prime()
{
    var n= prompt("enter a number");
    if(n==1)
    console.log("1 is not a prime number");
    else{
        for(var i=2; i<n; i++)
        {
            if(n%i ==0)
            {
                console.log("Number is not prime");
                break;
            }
            else
            console.log("Number is prime");
            break;
        }
    }
}
prime();

