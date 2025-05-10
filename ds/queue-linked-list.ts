class QueueItem<T> {
    private value: T;

    private nextNode: QueueItem<T> | null = null;

    constructor(initialValue: T) {
        this.value = initialValue;
    }

    public getValue(): T {
        return this.value;
    }

    public setValue(newValue: T): T {
        this.value = newValue;

        return newValue;
    }

    public getNextNode(): QueueItem<T> | null {
        return this.nextNode;
    }

    public setNextNode(newNextNode: QueueItem<T> | null): QueueItem<T> | null {
        this.nextNode = newNextNode;

        return newNextNode;
    }
}

export class Queue<T> {
    private headNode: QueueItem<T> | null = null;
    private tailNode: QueueItem<T> | null = null;

    private size: number = 0;

    constructor() {}

    public getSize(): number {
        return this.size;
    }

    public peek(): T | null {
        return this.headNode ? this.headNode.getValue() : null;
    }

    public enqueue(newItemValue: T): number {
        const currentSize = this.size;

        const newQueueItem = new QueueItem<T>(newItemValue);

        if (currentSize === 0) {
            this.headNode = newQueueItem;
            this.tailNode = newQueueItem;

            this.size = 1;

            return 1;
        }

        this.tailNode!.setNextNode(newQueueItem);
        this.tailNode = newQueueItem;

        const newSize = currentSize + 1;

        this.size = newSize;

        return newSize;
    }

    public dequeue(): T | null {
        const currentSize = this.size;

        if (currentSize === 0) {
            return null;
        }

        this.size = currentSize - 1;

        const toDequeue = this.headNode!;
        const newHead = toDequeue.getNextNode();

        this.headNode = newHead;

        return toDequeue.getValue();
    }
}

// Tests

// Create a queue of numbers
const numberQueue = new Queue<number>();
console.log("Initial queue size:", numberQueue.getSize());
console.log("Peek at empty queue:", numberQueue.peek());

// Enqueue some values
numberQueue.enqueue(10);
numberQueue.enqueue(20);
numberQueue.enqueue(30);
console.log("Queue size after adding 3 items:", numberQueue.getSize());
console.log("Peek at front of queue:", numberQueue.peek());

// Dequeue values
const firstItem = numberQueue.dequeue();
console.log("Dequeued first item:", firstItem);
console.log("Queue size after dequeue:", numberQueue.getSize());
console.log("Peek after dequeue:", numberQueue.peek());

// Dequeue remaining items
const secondItem = numberQueue.dequeue();
const thirdItem = numberQueue.dequeue();
console.log("Dequeued second and third items:", secondItem, thirdItem);
console.log("Queue size after dequeuing all items:", numberQueue.getSize());

// Dequeue from empty queue
const emptyDequeue = numberQueue.dequeue();
console.log("Attempt to dequeue from empty queue:", emptyDequeue);

// Test with string queue
const stringQueue = new Queue<string>();
stringQueue.enqueue("first");
stringQueue.enqueue("second");
console.log("String queue size:", stringQueue.getSize());
console.log("String queue front item:", stringQueue.peek());
console.log("Dequeued from string queue:", stringQueue.dequeue());
