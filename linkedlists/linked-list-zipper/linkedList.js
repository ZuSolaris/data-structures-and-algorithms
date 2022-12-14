function zipperList() {
  class list{
    constructor() {
      let current1 = this.head;

      let current2 = this.head;
      if (current1 === current2) {
        current1 = this.node;
        current2 = this.node;
        if (this.next !== null) {
          current1 = current1.next;
          current2 = current2.next;
        }
        else { return null; }
        return this.list.head;
      }

    }
  }
}


zipperList();

