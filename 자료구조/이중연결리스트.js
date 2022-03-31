//
class Node {
  constructor(initValue) {
    this.value = initValue;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(appendValue) {
    const appendNode = new Node(appendValue);
    // head가 있으면 === Node요소가 있으면
    if (this.head) {
      this.tail.next = appendNode;
      appendNode.prev = this.tail;
      this.tail = appendNode;
      return;
    }
    // head가 없으면 === 비어있으면
    this.head = appendNode;
    this.tail = appendNode;
  }

  insert(node, insertValue) {
    const insertNode = new Node(insertValue);
    insertNode.next = node.next;
    node.next = insertNode;
    insertNode.prev = node;
    insertNode.next.prev = insertNode;
  }

  find(findValue) {
    let currentNode = this.head;
    while (currentNode.value !== findValue) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        return -1;
      }
    }
    return currentNode;
  }

  remove(removeValue) {
    let currentNode = this.head;
    while (currentNode && currentNode.value !== removeValue) {
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log(`${removeValue}를 찾을 수 없습니다.`);
      return;
    }
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
  }

  display() {
    let currentNode = this.head;
    let string = "";
    while (currentNode) {
      string += `${String(currentNode.value)} `;
      currentNode = currentNode.next;
    }
    console.log(string);
  }
}

const doubleLinkList = new DoubleLinkList();
doubleLinkList.append(1);
doubleLinkList.append(3);
doubleLinkList.append(5);
doubleLinkList.insert(doubleLinkList.find(3), 4);
doubleLinkList.remove(4);
console.log(doubleLinkList);
doubleLinkList.display();
