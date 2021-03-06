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
    // head.value가 삭제할 값일 때
    if (this.head.value === value) {
      this.head = this.head.next;
      this.len -= 1;
      return;
    }

    let prevNode = this.head;
    // 삭제할 value를 가리키는 전 단계 Node를 찾는다
    while (prevNode.next && prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    // 다음 Node가 있으면
    if (prevNode.next !== null) {
      // 다다음Node를 다음으로 가리키도록 해서 다음 Node를 삭제
      prevNode.next = prevNode.next.next;
      this.len -= 1;
      return;
    }
    // 다음 Node가 없으면 === 끝까지 탐색했는데 못찾음
    console.log(`${value}를 찾을 수 없습니다.`);
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
linkedList.append(3);
linkedList.remove(10);
linkedList.remove(1);
console.log(linkedList.size());
console.log(linkedList.find(2));
linkedList.remove(1000);
linkedList.remove(3);
linkedList.display();
