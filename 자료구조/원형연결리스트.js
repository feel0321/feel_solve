class Node {
  constructor(initValue) {
    this.value = initValue;
    this.next = null;
  }
}

class CircleLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  append(appendValue) {
    const appendNode = new Node(appendValue);
    this.len += 1;
    if (this.head) {
      this.tail.next = appendNode;
      this.tail = appendNode;
      this.tail.next = this.head;
      return;
    }
    this.head = appendNode;
    this.tail = appendNode;
    this.tail.next = this.head;
  }

  insert(node, insertValue) {
    const insertNode = new Node(insertValue);
    insertNode.next = node.next;
    node.next = insertNode;
    this.len += 1;
  }

  find(findValue) {
    let currentNode = this.head;
    while (currentNode.value !== findValue) {
      currentNode = currentNode.next;
      if (currentNode === this.head) {
        console.log(`${findValue}를 찾을 수 없습니다. find 불가`);
        return;
      }
    }
    return currentNode;
  }

  remove(removeValue) {
    let prevNode = this.head;
    while (prevNode.next.value !== removeValue) {
      prevNode = prevNode.next;
      if (prevNode === this.head) {
        console.log(`${removeValue}를 찾을 수 없습니다. remove 불가`);
        return;
      }
    }
    prevNode.next = prevNode.next.next;
  }

  size() {
    return this.len;
  }

  display() {
    let currentNode = this.head;
    let string = "";
    while (currentNode) {
      string += `${currentNode.value} `;
      currentNode = currentNode.next;
      if (currentNode === this.head) break;
    }
    console.log(string);
  }
}

const myCircleList = new CircleLinkList();
myCircleList.append(1);
console.log(myCircleList);
myCircleList.append(2);
console.log(myCircleList);
myCircleList.append(3);
console.log(myCircleList);
myCircleList.insert(myCircleList.find(2), 5);
console.log(myCircleList);
myCircleList.display();
myCircleList.remove(2);
myCircleList.display();
