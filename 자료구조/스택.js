class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// top으로 데이터 push, top부터 pop
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    // if (this.len === 0) {
    if (this.top === null) {
      console.log("스택이 비어있습니다. pop 불가");
      return;
    }
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();
console.log(stack.pop()); // undefined
stack.push(1);
console.log(stack);
stack.push(2);
console.log(stack);
stack.push(3);
console.log(stack);
console.log(stack.pop()); // 3
stack.push(4);
console.log(stack.pop()); // 4
console.log(stack.pop()); // 2
