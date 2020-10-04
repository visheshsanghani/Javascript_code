class LinkedList{
    head = null;
    tail = null;
    Node = (value) =>{
        return{
            v : value,
            prev : null,
            next : null
        }
    }

    printAll = ( ) =>
    {
        let current = this.head;
        while(current){
            console.log(current.v);
            current = current.next;
        }
    }

    addNode = (value) =>{
        const newNode = this.Node(value);
        if(this.head == null){
            this.head = this.tail = newNode ;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        return;
    }

    quickSort = (head , tail) => {
        if(head == tail )
        return;

        let newNode = this.partision(head , tail);

        this.quickSort(head , newNode.prev);
        this.quickSort(newNode.next , tail);


    }

    partision = (head , tail) =>{
        var pivot = tail.v;
        var i = head.prev;
        for(let j = head ; j != tail ; j = j.next){
            if(j.v<pivot){
                i = (i==null) ? head : i.next;
                let temp = i.v;
                i.v = j.v;
                j.v = temp;
            }
        }
        i = (i==null) ? head : i.next;
        let temp = tail.v;
        tail.v = i.v;
        i.v = temp;
        // console.log("here",i);
        return i;

    }

    _quickSort(){
        this.quickSort(this.head,this.tail);
    }


    main = () =>{
        this.addNode(4);
        this.addNode(21);
        this.addNode(12);
        this.addNode(43);
        this.addNode(9);
        this.addNode(1);
        // this._quickSort()
        this.printAll();
    }

}

ll = new LinkedList();
ll.main();