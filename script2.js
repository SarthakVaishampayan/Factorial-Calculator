
a=6
function factorial(number){

    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,)) //we used slice becuase the array will start from 0 and we dont want that wehn taking out factorial hence we slice the first element that is 0 and the array starts with 1
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(c)
}

factorial(a)



