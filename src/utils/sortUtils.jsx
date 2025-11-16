// A-Z
export const mergeSortAlphabetically  = (arr) => {
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortAlphabetically(arr.slice(0, mid));
    const right = mergeSortAlphabetically(arr.slice(mid));


    let i = 0, j = 0, k = 0

    while(i < left.length && j < right.length){
        arr[k++] = left[i] < right[j] ? left[i++] : right[j++]
    }

    while(i < left.length) arr[k++] = left[i++]
    while(j < right.length) arr[k++] = right[j++]

    return arr
}

// Z-A
export const mergeSortAlphabeticallyReverse = (arr) =>{
    return mergeSortAlphabetically(arr).reverse();
}

// 1-9 (по дате)
export const QuickSort = (arr) => {
    if (arr.length <= 1) return arr;

    const [pivot, ...rest] = arr;

    const less = rest.filter(el => el.date <= pivot.date);
    const more = rest.filter(el => el.date > pivot.date);

    return [...QuickSort(less), pivot, ...QuickSort(more)];
}

// 9-1 (по дате)
export const QuickSortReverse = (arr) => {
    return QuickSort(arr).reverse();
}
