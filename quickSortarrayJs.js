let a = [10, 7, 8, 9, 1, 5];
function quicksort(arr, low, high) {
    if (low < high) {
        let pi = partision(arr, low, high);

        quicksort(arr, low, pi - 1);
        quicksort(arr, pi + 1, high);
    }
}

function partision(arr, low, high) {
    let i = low - 1;
    let pivot = arr[high];
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    let temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;

    return i+1;
}

quicksort(a,0,a.length-1);
console.log(a)