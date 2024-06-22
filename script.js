alert("Welcome to Factorial Calculator !")

let choice =prompt("Choose your method\n1.Using for loop method\n2.Using Reduce method")

if(choice==1){

    let n = prompt("Enter the number ")
    console.log(n)
    let factorial = 1
    for (let index = 1; index <= n; index++) {
            factorial=factorial*index
        }
        alert(`The Factorial of ${n} using for-loop method  is ${factorial}`)
           
    }
if(choice==2){

    
    //method no two
    let n = prompt("Enter the number ")
    let arr = []
    for (let index = 1; index <= n; index++) {
        arr.push(index)
        
    }
    let newArr =[]
    const red = (a,b)=>{
        return a*b
        
    }
    alert(`The Factorial of ${n} using Reduce method is ${arr.reduce(red)}`)
}
    