const findNumbers = (arr, target) => {
 for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] + arr[j] == target) {
            return [arr[i], arr[j]];
        }
    }
 }
 return 'No such numbers';
}