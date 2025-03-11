class LinkedList {
    head;
    tail;
    size;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.size === 0) {
            this.head = newNode;
        } else {
            this.tail.nextNode = newNode;
        }
        
        this.tail = newNode;
        this.size += 1;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.size += 1;
    }

    at(index) {
        if (index > this.size-1 || index < 0) {
            return null;
        }

        let currentIndex = 0;
        let currentNode = this.head;
        while (currentNode.nextNode !== null) {
            if (currentIndex === index) {
                break;
            }
            currentNode = currentNode.nextNode;
            currentIndex += 1;
        }

        return currentNode;
    }

    pop() {
        let prev = null;
        let currentNode = this.head;
        while (currentNode.nextNode !== null) {
            prev = currentNode;
            currentNode = currentNode.nextNode;
        }
        prev.nextNode = null;
        this.size -= 1;
    }

    contains(value) {
        let currentNode = this.head;

        while (currentNode.nextNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }

        if (currentNode.value === value) {
            return true;
        }

        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode.nextNode !== null) {
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.nextNode;
            index += 1;
        }

        if (currentNode.value === value) {
            return index;
        }

        return null;
    }

    toString() {
        let currentNode = this.head;
        let string = "";
        while (currentNode.nextNode !== null) {
            string += `( ${currentNode.value} ) => `;
            currentNode = currentNode.nextNode;
        }
        string += `( ${currentNode.value} ) => null`;

        return string;
    }

    insertAt(value, index) {
        let currentNode = this.head;
        let currentIndex = 0;
        if (index < 0 || index >= this.size) {
            throw new Error("Out of bounds error");
        } else if (index === 0) {
            this.prepend(value);
        } else if (index === this.size - 1) {
            this.append(value);
        } else {
            let prevNode = null;
            while (currentNode.nextNode !== null) {
                if (index === currentIndex) {
                    const newNode = new Node(value, currentNode);
                    prevNode.nextNode = newNode;
                    break;
                }
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
                currentIndex += 1;
            }
        }
    }

    removeAt(index) {
        let currentNode = this.head;
        let currentIndex = 0;
        if (index < 0 || index >= this.size) {
            throw new Error("Out of bounds error");
        } else if (index === 0) {
            this.head = this.head.nextNode;
        } else if (index === this.size - 1) {
            this.pop();
        } else {
            let prevNode = null;
            while (currentNode.nextNode !== null) {
                if (index === currentIndex) {
                    prevNode.nextNode = currentNode.nextNode;
                    break;
                }
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
                currentIndex += 1;
            }
        }
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export { LinkedList }