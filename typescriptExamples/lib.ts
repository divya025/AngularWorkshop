class SomeBaseClass {
    name:string;
    constructor(name:string){
        this.name = name;
    }

    printName(){
        console.log(this.name);
    }
}

let myobj = new SomeBaseClass("divya");
myobj.name = "yay"
myobj.printName()