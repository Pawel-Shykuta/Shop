// A-Z
export const mergeSortAlphabetically  = (arr) => {
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortAlphabetically(arr.slice(0, mid));
    const right = mergeSortAlphabetically(arr.slice(mid));

    const res  = [];

    while(left.length && right.length){
        if((left[0].name || '').localeCompare(right[0].name || '') <= 0){
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }

    return [...res, ...left, ...right];
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
