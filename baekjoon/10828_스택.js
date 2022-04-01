const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(initValue) {
    this.value = initValue;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.len = 0;
  }

  push(pushValue) {
    const pushNode = new Node(pushValue);
    if (this.head) {
      pushNode.next = this.head;
      this.head = pushNode;
    } else {
      pushNode.next = this.head;
      this.head = pushNode;
    }
    this.len += 1;
  }

  pop() {
    if (this.head) {
      const popValue = this.head.value;
      this.head = this.head.next;
      this.len -= 1;
      return popValue;
    }
    return -1;
  }

  size() {
    return this.len;
  }

  empty() {
    return this.len ? 0 : 1;
  }

  top() {
    return this.head?.value ? this.head.value : -1;
  }
}

console.log(solution(input));

function solution(input) {
  const stack = new Stack();
  let answer = "";

  input.forEach((line) => {
    let [command, value] = line.split(" ");
    if (command.includes("\r")) command = command.slice(0, command.length - 1);

    value = Number(value);
    if (command === "push") stack.push(value);
    else if (command === "pop") answer += `${stack.pop()}\n`;
    else if (command === "size") answer += `${stack.size()}\n`;
    else if (command === "empty") answer += `${stack.empty()}\n`;
    else if (command === "top") answer += `${stack.top()}\n`;
  });
  return answer;
}
