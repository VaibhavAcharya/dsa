/**
 * Returns the index of given element in the given array if found.
 *
 * Uses a linear search internally.
 *
 * Time complexity [Worst]: `O(n)`.
 * The element could potentially be at the last.
 *
 * @param array A collection of any type.
 * @param element The element you want to search.
 *
 * @returns The index if element found else undefined.
 */
export function indexOfLinear<T extends number | string>(
    array: T[],
    element: T,
): number | undefined {
    if (array.length === 0) return undefined;

    for (let i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return i;
        }
    }

    return undefined;
}

// Tests

const test1Array = [0, 2343, 234, 0, 8290];
const test1Element = 234;

const test2Array = ["a", "c", "d"];
const test2Element = "c";

console.log(
    "indexOf",
    test1Element,
    "in",
    test1Array,
    "is",
    indexOfLinear(test1Array, test1Element),
);

console.log(
    "indexOf",
    test2Array,
    "in",
    test1Element,
    "is",
    indexOfLinear(test2Array, test2Element),
);
