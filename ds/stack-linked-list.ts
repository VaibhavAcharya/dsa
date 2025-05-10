type StackNode<T> = {
    value: T;

    nextNode: StackNode<T> | null;
};

export class Stack<T> {
    private head: StackNode<T> | null = null;

    private length: number = 0;

    constructor() {}

    push(newStackNodeValue: T): number {
        const currentLength = this.length;
        const newLength = currentLength + 1;

        this.length = newLength;

        const newStackNode: StackNode<T> = {
            value: newStackNodeValue,
            nextNode: this.head,
        };

        this.head = newStackNode;

        return newLength;
    }

    pop(): T | null {
        const currentLength = this.length;

        if (currentLength === 0) {
            return null;
        }

        const newLength = currentLength - 1;
        this.length = newLength;

        const toBePopped = this.head!;
        const newHead = toBePopped.nextNode;

        this.head = newHead;

        return toBePopped.value;
    }
}

// Tests

// ----- Number stack tests -----
const numStack = new Stack<number>();

// Attempt to pop from an empty stack
console.log("Initial pop on empty stack (should be null):", numStack.pop());

// Push values onto the stack
console.log("Push value 10, new size should be 1:", numStack.push(10));
console.log("Push value 20, new size should be 2:", numStack.push(20));
console.log("Push value 30, new size should be 3:", numStack.push(30));

// Pop values off the stack (LIFO order)
console.log("Pop should return 30:", numStack.pop());
console.log("Pop should return 20:", numStack.pop());
console.log("Pop should return 10:", numStack.pop());

// Pop from an empty stack again
console.log("Pop on empty stack should return null:", numStack.pop());

// ----- String stack tests -----
const strStack = new Stack<string>();

strStack.push("first");
strStack.push("second");
strStack.push("third");

console.log("Pop should return 'third':", strStack.pop());
console.log("Pop should return 'second':", strStack.pop());
console.log("Pop should return 'first':", strStack.pop());
console.log("Pop on empty string stack should return null:", strStack.pop());
