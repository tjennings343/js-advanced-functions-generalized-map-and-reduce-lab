// Add your functions here
function map(arr, callBack){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        let element = arr[i]
        newArr.push(callBack(element))
    }
    return newArr
}

function reduce(arr, callBack, start){
    let total = (!!start) ? start : arr[0]
    let result = (!!start) ? 0 : 1

    for(; result < arr.length; result++){
        total = callBack(arr[result], total)
    }
    return total
}