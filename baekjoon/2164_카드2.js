const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = Number(input);

class Node {
  constructor(initValue) {
    this.value = initValue;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  enqueue(enqueueValue) {
    const enqueueNode = new Node(enqueueValue);
    if (this.head) {
      this.tail.next = enqueueNode;
      this.tail = enqueueNode;
    } else {
      this.head = enqueueNode;
      this.tail = enqueueNode;
    }
    this.len += 1;
  }

  dequeue() {
    const dequeueValue = this.head.value;
    this.head = this.head.next;
    this.len -= 1;
    return dequeueValue;
  }

  size() {
    return this.len;
  }
}

console.log(solution(input));

function solution(input) {
  const cards = new Queue();

  for (let num = 1; num <= input; num++) {
    cards.enqueue(num);
  }
  while (cards.size() > 1) {
    cards.dequeue();
    cards.enqueue(cards.dequeue());
  }
  return cards.head.value;
}
