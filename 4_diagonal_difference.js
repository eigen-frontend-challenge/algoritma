
function diagonalDifference(arr){
    let len = arr.length;
    let sumR = 0;
    let sumL = 0;

    for(let i = 0; i< len; i++){
        sumR += arr[i][i]
        sumL += arr[i][len - i - 1]
    }

    const difference = Math.abs(sumR-sumL)
    console.log(Math.abs(sumR-sumL))

    return difference
}

diagonalDifference([[1, 2, 0], [4, 5, 6], [7, 8, 9]])