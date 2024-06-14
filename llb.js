class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Pointer to the next node
    }
}
class Queue {
    constructor() {
        this.front = null; // Pointer to the front of the queue
        this.rear = null; // Pointer to the rear of the queue
        this.size = 0; // Size of the queue
    }

    // enqueue(item): Adds an element to the rear of the queue
    enqueue(data) {
        let newNode = new Node(data); // Create a new node with given data

        // If queue is empty, new node is both front and rear
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            // Add the new node at the end of queue and update rear
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++; // Increment the size of the queue
    }

    // dequeue(): Removes and returns the element from the front of the queue
    dequeue() {
        // Check if queue is empty
        if (this.isEmpty()) {
            return "Underflow"; // Returns Underflow if queue is empty
        }

        let removedNode = this.front; // Node to be removed is the front node
        this.front = this.front.next; // Update front to next node

        // If front becomes null, then queue is empty, update rear also as null
        if (this.front === null) {
            this.rear = null;
        }

        this.size--; // Decrement the size of the queue
        return removedNode.data; // Return the data of the removed node
    }

    // isEmpty(): Returns true if the queue is empty, false otherwise
    isEmpty() {
        return this.size === 0;
    }

    // front(): Returns the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue"; // Returns No elements if queue is empty
        }
        return this.front.data; // Returns the data of the front node
    }

    // printQueue(): Prints all the elements of the queue
    printQueue() {
        let current = this.front;
        let result = "";
        while (current) {
            result += current.data + " ";
            current = current.next;
        }
        return result.trim();
    }
}

// Example usage:
let queue = new Queue();

console.log(queue.isEmpty()); // Output: true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.printQueue()); // Output: 10 20 30

console.log(queue.front()); // Output: 10

queue.dequeue();
console.log(queue.printQueue()); // Output: 20 30
