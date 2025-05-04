/**
 * Sorts the given array.
 *
 * Uses bubble sort internally.
 *
 * Time complexity [Worst]: `O(n^2)`.
 *
 * @param unsortedArray An unsorted numerical array.
 *
 * @returns A sorted numerical array.
 */
export function bubbleSort(unsortedArray: number[]): number[] {
    const sortedArray = structuredClone(unsortedArray);

    if (sortedArray.length <= 1) {
        return sortedArray;
    }

    if (sortedArray.length === 2) {
        const firstElement = sortedArray[0];
        const secondElement = sortedArray[1];

        if (firstElement > secondElement) {
            sortedArray[0] = secondElement;
            sortedArray[1] = firstElement;
        }

        return sortedArray;
    }

    for (let j = 0; j < sortedArray.length; j++) {
        for (let i = 0; i < sortedArray.length - 1 - j; i++) {
            const currentValue = sortedArray[i];
            const nextValue = sortedArray[i + 1];

            if (currentValue > nextValue) {
                sortedArray[i + 1] = currentValue;
                sortedArray[i] = nextValue;
            }
        }
    }

    return sortedArray;
}

// Tests

const test1Array = [5, 3, 8, 4, 2];
const test2Array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const test3Array = [1, 2, 3, 4, 5];
const test4Array: number[] = [];
const test5Array = [42];

console.log("Bubble sort of", test1Array, "is", bubbleSort(test1Array));

console.log("Bubble sort of", test2Array, "is", bubbleSort(test2Array));

console.log("Bubble sort of", test3Array, "is", bubbleSort(test3Array));

console.log("Bubble sort of", test4Array, "is", bubbleSort(test4Array));

console.log("Bubble sort of", test5Array, "is", bubbleSort(test5Array));
