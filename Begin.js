"use strict";
/*let mystring:string;
let mynumber:number;
let mystatus:boolean;
let mydata:any;
mydata="Hai";
console.log(mydata);

mystring="TypeScript";
mynumber=156;
mystatus=true;
console.log(mystring);
console.log(mynumber);
console.log(mystatus);

let mystring1:string;
mystring1="Welcome to Cts";
console.log(mystring1.slice(0,3));let my:number;
my=1;
console.log(my.toString()+"my result");
let myArray:string[];
let mynArray:number[];
mynArray=[1,2,3,4];
myArray=["Hello"];
console.log(myArray);
console.log(mynArray);
for(var n=0;n<myArray.length;n++){
    console.log(myArray[n]);
}
let myArray:Array<string>;
let mynArray:Array<number>;
mynArray=[1,2,3,4];
myArray=["Hello","Java"];
console.log(myArray);
console.log(mynArray);
for(var n=0;n<myArray.length;n++){
    console.log(myArray[n]);
}
myArray.forEach(function(value){console.log(value);})
let mytuple:[number,string]
mytuple=[1,"TypeScript"];
console.log(mytuple);
let myvar:void;
myvar=undefined;
console.log(myvar);
let m:null;
m=null;
console.log(m);
console.log(mytuple.pop());
mytuple.push(23);
console.log(mytuple);
enum myEnum{hai,sunday=4,monday,tuesday,wed};
console.log(myEnum.tuesday);
//Fun
function myFun(num1:number,num2:number):number{
    return num1+num2;

}
console.log(myFun(151,156));
function addfun(num1:any,num2:any):any{
    return(num1+num2);
}
console.log(addfun("hi",1));
function addnum(num1:any,num2:any):number{
    if(typeof num1=='string'&&typeof num2=='string'){
            let x:number;
            let y:number;
            x=parseInt(num1);
            y=parseInt(num2);
            return(x+y);
    }
    else
    return(num1+num2);

}
console.log(addnum(12,"21"));
interface myInterface{
    name:string;
    Title:string;

}
function Ifun(mydata:myInterface):string{
    return(mydata.name+""+mydata.Title);
}
let dat={name:"Karthik",Title:"Asso"}
console.log(Ifun(dat));
//Class
class User{
    Id:number;
    Name:string;
    Email:string;
     age:number;
    constructor(id:number,name:string,email:string,Age:number){
        this.Email=email;
        this.Id=id;
        this.Name=name;
        this.age=Age;
        console.log("User Created");
    }
    register(){
        console.log(this.Name+"Successfully register");
        console.log(firstUser.Id+" "+firstUser.Name+" "+firstUser.Email+" "+firstUser.age);

    }
    get(id:number):number{
        if(this.Id==id)return this.age;
        else return 0;
    }
}
    let firstUser=new User(1,"Karthik","Sai@gmail.com",22);
    
    firstUser.register();
    console.log(firstUser.get(1));
    class Admin extends User{
        type:string;
        constructor(id:number,name:string,email:string,Age:number,Type:string){
            super(id,name,email,Age);
            this.type=Type;
        }
        display(){
            console.log("you are"+this.type+"Admin");
            console.log(this.Id+this.Name+this.age+this.Email)
        }
    }
    let cUser=new Admin(2,"Gany","ganey@cts",23,"asss");
    cUser.register();
    cUser.display();*/
var User = /** @class */ (function () {
    function User(id, name, email, age) {
        this.Email = email;
        this.ID = id;
        this.Name = name;
        this.Age = age;
        console.log("User Created");
    }
    User.prototype.register = function () {
        console.log(this.Name + "Successfully register");
        console.log(this.ID + " " + this.Name + " " + this.Email + " " + this.Age);
    };
    User.prototype.getAge = function (id) {
        if (this.ID == id)
            return this.Age;
        else
            return 0;
    };
    return User;
}());
var cUser = new User(2, "Gany", "ganey@cts", 23);
cUser.register();
console.log(cUser.getAge(2));
