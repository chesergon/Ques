class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity; // Maximum size of the queue
        this.queue = new Array(capacity); // Array to store queue elements
        this.front = 0; // Index of the front element
        this.rear = -1; // Index of the rear element, initially -1 as queue is empty
        this.size = 0; // Current size of the queue
    }

    // enqueue(item): Adds an element to the rear of the queue
    enqueue(item) {
        if (this.isFull()) {
            console.log("Queue is full, cannot enqueue");
            return;
        }
        
        this.rear = (this.rear + 1) % this.capacity; // Circular increment of rear index
        this.queue[this.rear] = item; // Add element to the rear
        this.size++; // Increment the size of the queue
    }

    // dequeue(): Removes and returns the element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty, cannot dequeue");
            return;
        }

        let removedItem = this.queue[this.front]; // Element to be removed
        this.queue[this.front] = undefined; // Remove the element by making it undefined
        this.front = (this.front + 1) % this.capacity; // Circular increment of front index
        this.size--; // Decrement the size of the queue
        return removedItem; // Return the removed element
    }

    // front(): Returns the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        return this.queue[this.front]; // Return the front element
    }

    // isEmpty(): Returns true if the queue is empty, false otherwise
    isEmpty() {
        return this.size === 0;
    }

    // isFull(): Returns true if the queue is full, false otherwise
    isFull() {
        return this.size === this.capacity;
    }

    // printQueue(): Prints all the elements of the queue
    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        let result = "";
        for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
            result += this.queue[i] + " ";
        }
        result += this.queue[this.rear];
        console.log(result);
    }
}

// Example usage:
let queue = new CircularQueue(5); // Initialize circular queue with capacity 5

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

queue.printQueue(); // Output: 10 20 30 40 50

console.log(queue.front()); // Output: 10

queue.dequeue();
queue.dequeue();

queue.printQueue(); // Output: 30 40 50

queue.enqueue(60);
queue.enqueue(70);

queue.printQueue(); // Output: 30 40 50 60 70
