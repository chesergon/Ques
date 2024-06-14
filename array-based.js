class Queue {
    constructor() {
        this.items = []; // Array to store queue elements
    }

    // enqueue(item): Adds an element to the queue
    enqueue(element) {
        this.items.push(element); // Adding the element to the queue
    }

    // dequeue(): Removes an element from the queue and returns it
    dequeue() {
        // Check if the queue is empty
        if (this.isEmpty()) {
            return "Underflow"; // Returns Underflow if the queue is empty
        }
        return this.items.shift(); // Removes and returns the front element
    }

    // front(): Returns the front element of the queue without removing it
    front() {
        // Check if the queue is empty
        if (this.isEmpty()) {
            return "No elements in Queue"; // Returns No elements if queue is empty
        }
        return this.items[0]; // Returns the front element of the queue
    }

    // isEmpty(): Returns true if the queue is empty, false otherwise
    isEmpty() {
        return this.items.length === 0; // Checks if the queue is empty
    }

    // printQueue(): Prints all the elements of the queue
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " "; // Concatenating each element to str
        }
        return str;
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
