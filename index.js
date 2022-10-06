class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
 }
 
 class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
 
  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size++;
  }
 
  // Insert last node
  insertLast(data) {
   let node = new Node(data);
   let current;
 
   // If empty, make head
   if(!this.head) {
    this.head = node;
   } else {
    current = this.head;
 
    while(current.next) {
      current = current.next;
    }
 
    current.next = node;
   }
 
   this.size++;
  }
 
  // Insert at index 
  insertAt(data, index) {
   // If index is out of range
   if(index > 0 && index > this.size) {
    return;
   }
 
   // If first index
   if(index === 0) {
     this.head = new Node(data, this.head);
     return;
   }
 
   const node = new Node(data);
   let current, previous;
 
   // Set current to first
   current = this.head;
   let count = 0;
 
   while(count < index) {
     previous = current // Node before index
     count++;
     current = current.next; // Node after index
   }
 
   node.next = current;
   previous.next = node;
 
   this.size++;
  }
 
  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
 
    while(current) {
      if(count == index) {
        console.log(current.data);
      }
 
      count++;
      current = current.next;
    }
 
    return null;
  }
 
  // Remove at index 
  removeAt(index) {
    if(index > 0 && index >this.size) {
      return;
    }
 
    let current = this.head;
    let previous;
    let count = 0;
 
    if(index === 0) { // Remove first node
      this.head = current.next;
    } else { // Remove other nodes
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
 
      previous.next = current.next;
    }
 
    this.size--;
  }
 
  // Clear list 
  clearList() {
    this.head = null;
    this.size = 0;
  }
 
  // Print list data
  printListData() {
    let current = this.head;
 
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }

    // Remove data greater than x
    removeGreaterThan(x) {
      let current = this.head;
      let previous;

      while (current) {
        if (current.data > x) {
          let temp = current;
          current = current.next
          previous.next = temp.next 
        } else {
          previous = current
          current = current.next
        }
      }
  
    }
 }
 
 const ll = new LinkedList();
 
 ll.insertLast(38);
 ll.insertLast(74);
 ll.insertLast(87);
 ll.insertLast(21);
 ll.insertLast(91);
 ll.insertLast(98);
 ll.insertLast(73);
 ll.insertLast(41);
 ll.insertLast(29);
 ll.insertLast(3);
 ll.insertLast(72);
 ll.insertLast(94);
 ll.insertLast(12);
 ll.insertLast(13);
 ll.insertLast(16);
 
 ll.removeGreaterThan(50);

 ll.printListData();
 