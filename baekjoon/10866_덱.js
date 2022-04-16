const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

class Node {
  constructor(initValue) {
    this.value = initValue;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  // head가 back, tail이 front
  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  push_front(pushValue) {
    const pushNode = new Node(pushValue);
    if (this.len) {
      this.tail.next = pushNode;
      pushNode.prev = this.tail;
      this.tail = pushNode;
    } else {
      this.head = pushNode;
      this.tail = pushNode;
    }
    this.len += 1;
  }

  push_back(pushValue) {
    const pushNode = new Node(pushValue);
    if (this.len) {
      pushNode.next = this.head;
      this.head.prev = pushNode;
      this.head = pushNode;
    } else {
      this.head = pushNode;
      this.tail = pushNode;
    }
    this.len += 1;
  }

  pop_front() {
    if (this.len === 0) return -1;

    const frontValue = this.tail.value;
    if (this.len === 1) {
      this.head = null;
      this.tail = null;
    }
    if (this.len >= 2) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    this.len -= 1;
    return frontValue;
  }

  pop_back() {
    if (this.len === 0) return -1;

    const backValue = this.head.value;
    if (this.len === 1) {
      this.head = null;
      this.tail = null;
    }
    if (this.len >= 2) {
      this.head.next.prev = null;
      this.head = this.head.next;
    }
    this.len -= 1;
    return backValue;
  }

  size() {
    return this.len;
  }

  empty() {
    return Number(this.len === 0);
  }

  front() {
    return this.len ? this.tail.value : -1;
  }

  back() {
    return this.len ? this.head.value : -1;
  }
}

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const doubleLinkedList = new DoubleLinkedList();

console.log(solution(input, doubleLinkedList));

function solution(input, doubleLinkedList) {
  let answer = "";
  input.forEach((line) => {
    let [command, num] = line.split(" ");
    num = Number(num);

    if (command === "push_back") doubleLinkedList.push_back(num);
    if (command === "push_front") doubleLinkedList.push_front(num);
    if (command === "pop_front") answer += `${doubleLinkedList.pop_front()}\n`;
    if (command === "pop_back") answer += `${doubleLinkedList.pop_back()}\n`;
    if (command === "size") answer += `${doubleLinkedList.size()}\n`;
    if (command === "empty") answer += `${doubleLinkedList.empty()}\n`;
    if (command === "front") answer += `${doubleLinkedList.front()}\n`;
    if (command === "back") answer += `${doubleLinkedList.back()}\n`;
  });
  return answer;
}
