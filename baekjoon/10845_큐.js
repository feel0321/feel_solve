const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

class Queue {
  constructor() {
    this.queue = [];
    this.start = 0;
    this.end = 0;
  }

  push(pushValue) {
    this.queue[this.end] = pushValue;
    this.end += 1;
  }

  pop() {
    if (this.start === this.end) {
      return -1;
    }
    const popValue = this.queue[this.start];
    delete this.queue[this.start];
    this.start += 1;
    return popValue;
  }

  size() {
    return this.end - this.start;
  }

  empty() {
    return Number(this.start === this.end);
  }

  front() {
    if (this.end === this.start) {
      return -1;
    }
    return this.queue[this.start];
  }

  back() {
    if (this.start === this.end) {
      return -1;
    }
    return this.queue[this.end - 1];
  }
}

console.log(solution(input));

function solution(input) {
  let answer = "";
  const queue = new Queue();

  input.forEach((line) => {
    let [command, value] = line.split(" ");
    value = Number(value);
    if (command === "push") {
      queue.push(value);
    } else if (command === "pop") {
      answer += `${String(queue.pop())}\n`;
    } else if (command === "size") {
      answer += `${String(queue.size())}\n`;
    } else if (command === "empty") {
      answer += `${String(queue.empty())}\n`;
    } else if (command === "front") {
      answer += `${String(queue.front())}\n`;
    } else if (command === "back") {
      answer += `${String(queue.back())}\n`;
    }
  });
  return answer;
}
