class calculate{
    constructor(a,b){
       this.a = a;
       this.b = b;

    }
   
      addition(){
       console.log("addion of two number:" , this.a + this.b)
      
    }
    module(){
        console.log("module of two number:" , this.a * this.b)
    }
    substraction(){
        console.log("substraction of two number:" , this.a - this.b)
    }
    division(){
        console.log("division of two number:" , this.a / this.b)
    }
}

class calculate1 extends calculate{
    constructor(a,b,c){
        super(a,b);
        this.c = c;
       
    }
    addition(){
        console.log("addion of three number :" , this.a + this.b + this.c)

    }
    module(){
        console.log("module of three number:" , this.a * this.b * this.c)
    }
    substraction(){
        console.log("substraction of three number:" , this.a - this.b - this.c)
    }
    division(){
        console.log("division of three number:" , this.a / this.b / this.c)
    }

}


let cal=new calculate(5,5)
cal.addition()
cal.module()
cal.substraction()
cal.division()
console.log("---------")
let cal1=new calculate1(2,2,2)
cal1.addition()
cal1.substraction()
cal1.module()
cal1.division()


class array extends calculate1{
    
       
       
   
}

