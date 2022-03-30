class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  // 노드를 끝에 추가
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.len += 1;
  }

  // 노드를 중간에 추가
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
    this.len += 1;
  }

  // 삭제
  remove(value) {
    let prevNode = this.head;
    // 삭제할 value를 가리키는 전 단계 Node를 찾는다
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
      // 삭제할 값을 찾지 못하고 끝까지 탐색했으면 삭제할 값이 없는 것
      if (prevNode.next === null) {
        console.log(`${value}를 찾을 수 없습니다. 삭제 불가`);
        return;
      }
    }

    // 전 단계 Node가 삭제할 value의 next를 가리키도록해서 value를 가리키지다 않도록 해서 삭제
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
      this.len -= 1;
    }
  }

  // head부터 value를 탐색
  // 있으면 해당 Node, 없으면 -1 반환
  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
      if (currNode === null) {
        return -1;
      }
    }
    return currNode;
  }

  display() {
    let currNode = this.head;
    let displayString = "[";
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.substr(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }

  size() {
    return this.len;
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
console.log(linkedList.size());
console.log(linkedList.find(3));
linkedList.remove(10);
