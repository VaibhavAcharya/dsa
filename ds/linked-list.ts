class LinkedListNode<T> {
    protected value: T;

    protected prevNode: LinkedListNode<T> | null = null;
    protected nextNode: LinkedListNode<T> | null = null;

    constructor(initialValue: T) {
        this.value = initialValue;
    }

    getValue(): T {
        return this.value;
    }

    setValue(newValue: T): T {
        this.value = newValue;

        return this.value;
    }

    getPrevNode(): LinkedListNode<T> | null {
        return this.prevNode;
    }

    setPrevNode<V extends LinkedListNode<T> | null>(newNode: V): V {
        this.prevNode = newNode;

        return this.prevNode as V;
    }

    getNextNode(): LinkedListNode<T> | null {
        return this.nextNode;
    }

    setNextNode<V extends LinkedListNode<T> | null>(newNode: V): V {
        this.nextNode = newNode;

        return this.nextNode as V;
    }
}

class LinkedList<T> {
    protected head: LinkedListNode<T>;

    constructor(headInitialValue: T) {
        this.head = new LinkedListNode(headInitialValue);
    }

    public getLastNode(): LinkedListNode<T> {
        if (this.head.getNextNode() === null) {
            return this.head;
        }

        let currentNode: LinkedListNode<T> = this.head;

        do {
            currentNode = currentNode.getNextNode()!;
        } while (currentNode.getNextNode() !== null);

        return currentNode;
    }

    public toArray(): T[] {
        const values: T[] = [];

        let nextNode: LinkedListNode<T> | null = this.head;

        do {
            values.push(nextNode.getValue());
            nextNode = nextNode.getNextNode();
        } while (nextNode !== null);

        return values;
    }

    public attachAtEnd(value: T): LinkedListNode<T> {
        const lastNode = this.getLastNode();

        const newNode = new LinkedListNode(value);

        lastNode.setNextNode(newNode);

        newNode.setPrevNode(lastNode);

        return newNode;
    }

    public detachAtEnd(): T {
        if (this.head.getNextNode() === null) {
            throw Error("Cannot detach head node!");
        }

        const lastNode = this.getLastNode();
        const valueOfLastNode = lastNode.getValue();

        const prevNodeToLastNode = lastNode.getPrevNode()!;

        prevNodeToLastNode.setNextNode(null);

        return valueOfLastNode;
    }
}

// Tests

const test1List = new LinkedList<number>(42);
console.log("Initial list with head value 42:", test1List.toArray());

test1List.attachAtEnd(24);
test1List.attachAtEnd(12);
test1List.attachAtEnd(6);
console.log("After attaching values 24, 12, 6:", test1List.toArray());

const detachedValue = test1List.detachAtEnd();
console.log("Detached value:", detachedValue);
console.log("List after detaching:", test1List.toArray());

const test2List = new LinkedList<string>("hello");
console.log("String list with head value 'hello':", test2List.toArray());

test2List.attachAtEnd("world");
test2List.attachAtEnd("!");
console.log("After attaching 'world' and '!':", test2List.toArray());

try {
    const singleNodeList = new LinkedList<number>(1);
    singleNodeList.detachAtEnd();
    console.log("This should not be printed");
} catch (error) {
    console.log(
        "[Expected] Error caught when trying to detach from single node list",
    );
}

const lastNode = test1List.getLastNode();
console.log("Last node value:", lastNode.getValue());
