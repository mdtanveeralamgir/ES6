

class Counter{
    
    constructor(start = 0, wait){
        this.count = start;
        this.wait = wait;
        this.p = document.createElement("p");
        document.body.appendChild(this.p);
    }


    countIt(){
        this.count++;
        this.p.innerHTML = this.count;
    }

    /*
    A call back function
    
    */
    start(){
        setInterval(() =>{
        this.countIt();       
        }
        , this.wait);
    }
     
}

let count1 = new Counter(100, 300);

let count2 = new Counter(10, 200);

count1.start();

count2.start();

