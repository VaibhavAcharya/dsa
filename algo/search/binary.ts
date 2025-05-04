/**
 * Returns the index of given element in the given array if found.
 *
 * Uses a binary search internally.
 *
 * Time complexity [Worst]: `O(log n)`.
 * Half's the search array size with every check.
 *
 * @param sortedArray A collection of numbers.
 * @param element The number you want to search.
 *
 * @returns The index if element found else undefined.
 */
function indexOfBinary(
    sortedArray: number[],
    element: number
): number | undefined {
    if (sortedArray.length === 0) return undefined;

    let start: number = 0;
    let end: number = sortedArray.length - 1;

    let foundAt: number | undefined = undefined;

    while (start < end) {
        const middle = Math.floor((start + end) / 2);
        const middleValue = sortedArray[middle];

        if (element === middleValue) {
            foundAt = middle;

            break;
        } else if (element < middleValue) {
            end = middle;
        } else {
            start = middle;
        }
    }

    return foundAt;
}

// Tests

const test1Array = [0, 234, 2343, 8290];
const test1Element = 234;

const test2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const test2Element = 7;

const test3Array: number[] = [];
const test3Element = 5;

console.log(
    "indexOf",
    test1Element,
    "in",
    test1Array,
    "is",
    indexOfBinary(test1Array, test1Element)
);

console.log(
    "indexOf",
    test2Element,
    "in",
    test2Array,
    "is",
    indexOfBinary(test2Array, test2Element)
);

console.log(
    "indexOf",
    test3Element,
    "in",
    test3Array,
    "is",
    indexOfBinary(test3Array, test3Element)
);
