// normal class
class demo {
name!:string;
contact!:number;
  public myfun(num: string, num2: number) {
    this.name = num;
    this.contact = num2;
    console.log("Name:",num ," ","Contact", num2);
  }
}


//inheritance
class demo1 extends demo{

}
let obj1 = new demo1;
obj1.myfun("Ram", 96868);