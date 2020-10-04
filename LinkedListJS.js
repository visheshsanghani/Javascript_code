class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    Node = (value) => {
        return {
            value: value,
            next: null
        }
    }

    addNode = (value) => {
        let newNode = this.Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    printAll = () => {
        if (this.head) {
            let current = this.head;
            let ans = current.value;
            current = current.next;
            while (current.next !== null) {
                // console.log(current.value)
                ans = ans + '->' + current.value;
                current = current.next;
            }
            ans = ans + '->' + current.value;
            console.log(ans)
        }
        else {
            console.log('No values');
        }
    }
    main = () => {
        this.printAll();
        this.addNode(1);
        this.addNode(2);
        this.addNode(3);
        this.addNode(4);
        this.printAll();
    }

}

ll = new LinkedList();
ll.main()