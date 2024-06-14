class PriorityQueue {
    constructor() {
        this.heap = []; // Array to store elements in the priority queue
    }

    // Helper function: swaps two elements in the heap array
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }

    // Helper function: returns the parent index of a given node index
    parent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    // Helper function: returns the left child index of a given node index
    leftChild(idx) {
        return 2 * idx + 1;
    }

    // Helper function: returns the right child index of a given node index
    rightChild(idx) {
        return 2 * idx + 2;
    }

    // enqueue(item, priority): Adds an element with a priority to the priority queue
    enqueue(item, priority) {
        const newNode = { item, priority };
        this.heap.push(newNode); // Add the new node to the end of the array
        this.heapifyUp(this.heap.length - 1); // Heapify up from the last element
    }

    // Heapify up operation to maintain the heap property after enqueue
    heapifyUp(idx) {
        let currentIdx = idx;
        while (currentIdx > 0 && this.heap[currentIdx].priority < this.heap[this.parent(currentIdx)].priority) {
            this.swap(currentIdx, this.parent(currentIdx));
            currentIdx = this.parent(currentIdx);
        }
    }

    // dequeue(): Removes and returns the element with the highest priority from the priority queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow"; // Returns Underflow if priority queue is empty
        }
        if (this.heap.length === 1) {
            return this.heap.pop().item; // Return the only element in the priority queue
        }
        const removedNode = this.heap[0];
        this.heap[0] = this.heap.pop(); // Replace root with the last element in the array
        this.heapifyDown(0); // Heapify down from the root
        return removedNode.item; // Return the item of the removed node
    }

    // Heapify down operation to maintain the heap property after dequeue
    heapifyDown(idx) {
        let currentIdx = idx;
        let leftChildIdx = this.leftChild(currentIdx);
        let rightChildIdx = this.rightChild(currentIdx);
        let smallestIdx = currentIdx;

        // Check if left child exists and has higher priority than current node
        if (leftChildIdx < this.heap.length && this.heap[leftChildIdx].priority < this.heap[currentIdx].priority) {
            smallestIdx = leftChildIdx;
        }

        // Check if right child exists and has higher priority than current node or left child
        if (rightChildIdx < this.heap.length && this.heap[rightChildIdx].priority < this.heap[smallestIdx].priority) {
            smallestIdx = rightChildIdx;
        }

        // If the smallest index is not the current index, swap and heapify down recursively
        if (smallestIdx !== currentIdx) {
            this.swap(currentIdx, smallestIdx);
            this.heapifyDown(smallestIdx);
        }
    }

    // isEmpty(): Returns true if the priority queue is empty, false otherwise
    isEmpty() {
        return this.heap.length === 0;
    }

    // peek(): Returns the item with the highest priority without removing it from the priority queue
    peek() {
        if (this.isEmpty()) {
            return "No elements in Priority Queue"; // Returns No elements if priority queue is empty
        }
        return this.heap[0].item; // Return the item of the root node
    }

    // printQueue(): Prints all the elements of the priority queue
    printQueue() {
        let result = "";
        for (let i = 0; i < this.heap.length; i++) {
            result += `{ item: ${this.heap[i].item}, priority: ${this.heap[i].priority} } `;
        }
        return result.trim();
    }
}

// Example usage:
let pq = new PriorityQueue();

console.log(pq.isEmpty()); // Output: true

pq.enqueue("Task 1", 3);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 2);
pq.enqueue("Task 4", 4);

console.log(pq.printQueue()); // Output: { item: Task 2, priority: 1 } { item: Task 3, priority: 2 } { item: Task 1, priority: 3 } { item: Task 4, priority: 4 }

console.log(pq.peek()); // Output: Task 2

pq.dequeue();
console.log(pq.printQueue()); // Output: { item: Task 3, priority: 2 } { item: Task 1, priority: 3 } { item: Task 4, priority: 4 }
