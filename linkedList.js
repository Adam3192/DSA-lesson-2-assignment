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
      let previous = current;  
      let count = 0;    

      while (current) {
        if (x === 0) { 
          this.head = null;
          console.log('All numbers greater than zero have been removed so now the list is empty')
          return;
        }
        else if (current.data > x && count === 0) { 
          this.head = this.head.next;
          current = this.head;
        }
        else if (current.data > x) { 
          let temp = current;
          current = current.next;
          previous.next = temp.next ;
          count ++;
        } 
        else { 
          previous = current;
          current = current.next;
          count++;
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
 