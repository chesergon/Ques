class Deque {
    constructor() {
        this.items = []; // Array to store deque elements
    }

    // addFront(item): Adds an element to the front of the deque
    addFront(element) {
        this.items.unshift(element); // Adds element to the front of the array
    }

    // addRear(item): Adds an element to the rear of the deque
    addRear(element) {
        this.items.push(element); // Adds element to the end of the array
    }

    // removeFront(): Removes and returns the element from the front of the deque
    removeFront() {
        // Check if deque is empty
        if (this.isEmpty()) {
            return "Underflow"; // Returns Underflow if deque is empty
        }
        return this.items.shift(); // Removes and returns the front element
    }

    // removeRear(): Removes and returns the element from the rear of the deque
    removeRear() {
        // Check if deque is empty
        if (this.isEmpty()) {
            return "Underflow"; // Returns Underflow if deque is empty
        }
        return this.items.pop(); // Removes and returns the rear element
    }

    // isEmpty(): Returns true if the deque is empty, false otherwise
    isEmpty() {
        return this.items.length === 0;
    }

    // front(): Returns the front element of the deque without removing it
    front() {
        // Check if deque is empty
        if (this.isEmpty()) {
            return "No elements in Deque"; // Returns No elements if deque is empty
        }
        return this.items[0]; // Returns the front element
    }

    // rear(): Returns the rear element of the deque without removing it
    rear() {
        // Check if deque is empty
        if (this.isEmpty()) {
            return "No elements in Deque"; // Returns No elements if deque is empty
        }
        return this.items[this.items.length - 1]; // Returns the rear element
    }

    // printDeque(): Prints all the elements of the deque
    printDeque() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " "; // Concatenating each element to str
        }
        return str.trim();
    }
}

// Example usage:
let deque = new Deque();

console.log(deque.isEmpty()); // Output: true

deque.addRear(10);
deque.addRear(20);
deque.addFront(30);
deque.addFront(40);

console.log(deque.printDeque()); // Output: 40 30 10 20

console.log(deque.front()); // Output: 40
console.log(deque.rear()); // Output: 20

deque.removeFront();
deque.removeRear();

console.log(deque.printDeque()); // Output: 30 10
