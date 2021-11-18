import brand from "../brand.json";

const myBrand: { [key: string]: string } = brand;

console.log(typeof brand);
console.log(Object.keys(brand));

Object.keys(myBrand).forEach((key) => {
  console.log(myBrand[key]);
});
// Object.keys(brand).forEach((key: any) => {
// console.log(brand[key]);
// });
// const 옵션_배열 = Object.keys(brand).map((v) => {
//   console.log(v);

//   return v;
//   // let result = "";
//   if (brand[v] !== "word") {
//     // result = `<option data-testid="search-bar-option" value="${brand[v]}">${v}</option>`;
//   } else {
//     // result = `<option data-testid="search-bar-option" value="${brand[v]}" selected>${v}</option>`;
//   }
//   // return result;
// });
// function getFindPrice(price: number, discount: number) {
//   return price - price / discount;
// }

// console.log(getFindPrice(100, 10));

// function calcTax(
//   state: string,
//   income: number,
//   dependents: number
// ): number | undefined {
//   if (state === "NY") {
//     return income * 0.06 - dependents * 500;
//   } else if (state === "NJ") {
//     return income * 0.05 - dependents * 300;
//   }
// }

// let tax: number | undefined = calcTax("NJ", 500000, 2);

// function podLeft(
//   value: string,
//   padding: string | number
// ): string | undefined | never {
//   if (typeof padding === "number") {
//     return Array(padding + 1).join("") + value;
//   }

//   if (typeof padding === "string") {
//     return padding + value;
//   } else {
//     return padding;
//   }
// }

// console.log(podLeft("Hello World", 4));
// console.log(podLeft("Hello World", "Jogn says"));
// // console.log(podLeft("Hello World", true));

// type Foot = number;
// type Pound = number;
// type Patient = {
//   name: string;
//   height: Foot;
//   weight?: Pound;
// };

// let patient: Patient = {
//   name: "Jone Smith",
//   height: 5,
//   // weight: 100,
// };

// // class Person {
// //   constructor(
// //     public firstName: string,
// //     public lastName: string,
// //     public age: number
// //   ) {}
// // }

// // const p = new Person("John", "Smith", 25);

// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// function savePerson(person: Person): void {
//   console.log("Saving", person);
// }

// // const p = {
// //   firstName: "John",
// //   lastName: "Smith",
// //   age: 25,
// // };

// // savePerson(p);

// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// class Person {
//   name: string;
// }

// class Customer {
//   name: string;
//   age: number;
// }

// const cust: Customer = new Person();
// cust.age = 29;

// interface Rectangle {
//   kind: "rectangle";
//   width: number;
//   height: number;
// }

// interface Circle {
//   kind: "circle";
//   radius: number;
// }

// type Shape = Rectangle | Circle;

// function area(shape: Shape): number {
//   switch (shape.kind) {
//     case "rectangle":
//       return shape.height * shape.width;
//     case "circle":
//       return Math.PI * shape.radius * 2;
//   }
// }

// const myRectangle: Rectangle = { kind: "rectangle", width: 10, height: 20 };
// console.log(`Rectangle's area is ${area(myRectangle)}`);
// const myCircle: Circle = { kind: "circle", radius: 10 };
// console.log(`Circle's area is ${area(myCircle)}`);

// interface A {
//   a: number;
// }
// interface B {
//   b: string;
// }

// function foo(x: A | B) {
//   if ("a" in x) {
//     return x.a;
//   }

//   return x.b;
// }

// type Person = {
//   discriminator: "person";
//   address: string;
// };

// let person1: any;

// person1 = JSON.parse(`{"address": "25 Browdway"}`);

// console.log(person1.address);

// let person2: unknown;

// person2 = JSON.parse(`{"adress": "25 Broadway"}`);

// console.log(person2.address);

// const isPerson = (object: any): object is Person => "address" in object;

// if (isPerson(person1)) {
//   console.log(person1.address);
// } else {
//   console.log("person1 is not a Person");
// }

// const isPerson = (object: any): object is Person =>
//   !!object && object.discriminator === "person";

// class Dog {
//   name: string;

//   constructor(readonly newName: string) {}

//   sayHello(): string {
//     return "Dog says hello!";
//   }
// }

// class Fish {
//   name: string;

//   constructor(readonly newName: string) {}

//   dive(howDeep: number): string {
//     return `Diving ${howDeep}feet`;
//   }
// }

// type Pet = Dog | Fish;

// function talkToPet(pet: Pet): string {
//   if (pet instanceof Dog) {
//     return pet.sayHello();
//   } else if (pet instanceof Fish) {
//     return "Fish cannot talk, sorry.";
//   }
// }

// const myDog = new Dog("Sammy");
// const myFish = new Fish("Marry");

// console.log(talkToPet(myDog));
// console.log(talkToPet(myFish));

// class Person {
//   public firstName = "";
//   public lastName = "";
//   private age = 0;

//   protected sayHello(): string {
//     return `My name is ${this.firstName} ${this.lastName}`;
//   }
// }

// class Employee extends Person {
//   department = "";

//   reviewPerformance(): void {
//     this.sayHello();
//     // this.increasePay(5);
//   }

//   // increasePay(percent: number): void {
//   //   this.age;
//   // }
// }

// const empl = new Employee();
// empl.sayHello();

// class Person {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//     private age: number
//   ) {}
// }

// const pers = new Person("John", "Smith", 29);

// console.log(`${pers.firstName} ${pers.lastName} ${pers.age}`);

// class Gangsta {
//   static totalBullets = 100;
//   shoot() {
//     Gangsta.totalBullets--;
//     console.log(`Bullets left: ${Gangsta.totalBullets}`);
//   }
// }

// const g1 = new Gangsta();
// g1.shoot();

// const g2 = new Gangsta();
// g2.shoot();

// class AppState {
//   counter = 0;
//   private static instanceRef: AppState;
//   private constructor() {}
//   static getInstance(): AppState {
//     if (AppState.instanceRef === undefined) {
//       AppState.instanceRef = new AppState();
//     }

//     return AppState.instanceRef;
//   }
// }

// const appState1 = AppState.getInstance();
// const appState2 = AppState.getInstance();

// appState1.counter++;
// appState1.counter++;
// appState2.counter++;
// appState2.counter++;

// console.log(appState1.counter);
// console.log(appState2.counter);

// class Person {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//     private age: number
//   ) {}

//   sellStock(symbol: string, numberOfShares: number) {
//     console.log(`Selling ${numberOfShares} of ${symbol}`);
//   }
// }

// class Employee extends Person {
//   constructor(
//     firstName: string,
//     lastName: string,
//     age: number,
//     public department: string
//   ) {
//     super(firstName, lastName, age);
//   }

//   sellStock(symbol: string, shares: number) {
//     super.sellStock(symbol, shares);
//     this.reportToCompliance(symbol, shares);
//   }

//   private reportToCompliance(symbol: string, shares: number) {
//     console.log(
//       `${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`
//     );
//   }
// }

// const empl = new Employee("Joe", "Smith", 29, "Accounting");
// empl.sellStock("IBM", 100);

// abstract class Person {
//   constructor(public name: string) {}

//   changeAddress(newAddress: string) {
//     console.log(`Changing address to ${newAddress}`);
//   }

//   giveDayOff() {
//     console.log(`Giving a day off to ${this.name}`);
//   }

//   abstract increasePay(percent: number): void;

//   promote(percent: number) {
//     this.giveDayOff();
//     this.increasePay(percent);
//   }
// }

// class Employee extends Person {
//   increasePay(percent: number) {
//     console.log(`Increasing the salary of ${this.name} by ${percent}%`);
//   }
// }

// class Contractor extends Person {
//   increasePay(percent: number) {
//     console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
//   }
// }

// const workers: Person[] = [];

// workers[0] = new Employee("John");
// workers[1] = new Contractor("Mary");

// workers.forEach((worker) => worker.promote(5));

// class ProductService {
//   getProducts();

//   getProducts(id: number);

//   getProducts(id?: number) {
//     if (typeof id === "number") {
//       console.log(`Getting the product info for ${id}`);
//     } else {
//       console.log(`Getting all products`);
//     }
//   }
// }

// const prodService = new ProductService();

// prodService.getProducts(123);

// prodService.getProducts();

// interface Product {
//   id: number;
//   description: string;
// }

// class ProductService {
//   getProducts(description: string): Product[];
//   getProducts(id: number): Product;
//   getProducts(product: number | string): Product[] | Product {
//     if (typeof product === "number") {
//       console.log(`Getting the product info for id ${product}`);

//       return { id: product, description: "great product" };
//     } else if (typeof product === "string") {
//       console.log(`Getting product with description ${product}`);

//       return [
//         { id: 123, description: "blue jeans" },
//         { id: 789, description: "blue jeans" },
//       ];
//     } else {
//       return {
//         id: -1,
//         description: `Error: getProducts() accept only number or string as args`,
//       };
//     }
//   }
// }

// const prodService = new ProductService();

// console.log(prodService.getProducts(123));

// console.log(prodService.getProducts("blue jeans"));

// class Product {
//   id: number;
//   description: string;
//   constructor();
//   constructor(id: number);
//   constructor(id: number, description: string);
//   constructor(id?: number, descrtipion?: string) {}
// }

// interface ProductProperties {
//   id?: number;
//   description?: string;
// }

// class Product {
//   id: number;
//   description: string;

//   constructor(properties?: ProductProperties) {

//   }
// }

// interface MotorVehicle {
//   startEngine(): boolean;
//   stopEngine(): boolean;
//   brake(): boolean;
//   accelrate(speed: number);
//   honk(howLong: number): void;
// }

// class Car implements MotorVehicle {
//   startEngine(): boolean {
//     return true;
//   }

//   stopEngine(): boolean {
//     return true;
//   }

//   brake(): boolean {
//     return true;
//   }

//   accelrate(speed: number): void {
//     console.log(`Driving faster`);
//   }

//   honk(howLong: number): void {
//     console.log(`Beep beep yeah!`);
//   }
// }

// const car: MotorVehicle = new Car();

// car.startEngine();

// interface Flyable {
//   fly(howHigh: number);
//   land();
// }

// interface Swimmable {
//   swim(howFar: number);
// }

// class SecretServiceCat implements MotorVehicle, Flyable, Swimmable {
//   startEngine(): boolean {
//     return true;
//   }

//   stopEngine(): boolean {
//     return true;
//   }

//   brake(): boolean {
//     return true;
//   }

//   accelrate(speed: number): void {
//     console.log(`Driving faster`);
//   }

//   honk(howLong: number): void {
//     console.log(`Beep beep yeah!`);
//   }

//   fly(howHigh: number) {
//     console.log(`Flying ${howHigh} feet high`);
//   }

//   land() {
//     console.log(`Landing. Fasten your belts.`);
//   }

//   swim(howFar: number) {
//     console.log(`Swimming ${howFar} feet`);
//   }
// }

// interface Product {
//   id: number;
//   description: string;
// }

// interface IProductService {
//   getProducts(): Product[];
//   getProductById(id: number): Product;
// }

// class ProductService implements IProductService {
//   getProducts(): Product[] {
//     return [];
//   }

//   getProductById(id: number): Product {
//     return { id: 123, description: `Good product` };
//   }
// }

// class MockProductService implements IProductService {
//   getProducts(): Product[] {
//     return [];
//   }

//   getProductById(id: number): Product {
//     return { id: 123, description: `Good product` };
//   }
// }

// function getProductService(isProduction: boolean): IProductService {
//   if (isProduction) {
//     return new ProductService();
//   } else {
//     return new MockProductService();
//   }
// }

// let productService: IProductService;

// const isProd = true;
// productService = getProductService(isProd);
// const products: Product[] = productService.getProducts();

// enum Weekdays {
//   Monday = 1,
//   Tuesday,
//   Wednesday,
//   Thurdsday,
//   Friday,
//   Saturday,
//   Sunday,
// }

// console.log(Weekdays[3]);

// function convertTemperature(temp: number, fromTo: string): number {
//   return "FtoC" === fromTo
//     ? ((temp - 32) * 5.0) / 9.0
//     : (temp * 9.0) / 5.0 + 32;
// }

// console.log(`70F is ${convertTemperature(70, "FtoC")}C`);
// console.log(`21C is ${convertTemperature(21, "CtoF")}F`);
// console.log(`35C is ${convertTemperature(35, "ABCD")}F`);

// enum Direction {
//   FtoC,
//   CtoF,
// }

// function convertTemperature(temp: number, fromTo: Direction): number {
//   return Direction.FtoC === fromTo
//     ? ((temp - 32) * 5.0) / 9.0
//     : (temp * 9.0) / 5.0 + 32;
// }

// console.log(`70F is ${convertTemperature(70, Direction.FtoC)}C`);
// console.log(`21C is ${convertTemperature(21, Direction.CtoF)}F`);

// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "Right",
// }

// function move(direction: "Up" | "Down" | "Left" | "Right") {}
// move("North");

// type Direction = "Up" | "Down" | "Left" | "Right";

// function move(direction: Direction) {}

// move("North");

// enum ProductsActionTypes {
//   Search = "Products Search",
//   Load = "Products Load All",
//   LoadFailure = "Products Load All Failure",
//   LoadSuccess = "Products Load All Success",
// }

// console.log(ProductsActionTypes.LoadFailure);

// class Person {
//   name: string;
// }

// class Employee extends Person {
//   department: number;
// }

// class Animal {
//   name: string;
//   breed: string;
// }

// const workers: Array<Person> = [];

// workers[0] = new Person();
// workers[1] = new Employee();
// workers[2] = new Animal();
// workers[3] = { name: "Mary" };

// const values4: Array<string | number> = ["Joe", 123, 456];

// interface Comparator<T> {
//   compareTo(value: T): number;
// }

// class Rectangle implements Comparator<Rectangle> {
//   constructor(private width: number, private height: number) {}

//   compareTo(value: Rectangle): number {
//     return this.width * this.height - value.width * value.height;
//   }
// }

// const rect1: Rectangle = new Rectangle(2, 5);
// const rect2: Rectangle = new Rectangle(2, 3);

// rect1.compareTo(rect2) > 0
//   ? console.log("rect1 is bigger")
//   : rect1.compareTo(rect2) == 0
//   ? console.log("rectangles are equal")
//   : console.log("rect1 is smaller");

// class Programmer implements Comparator<Programmer> {
//   constructor(public name: string, private salary: number) {}

//   compareTo(value: Programmer): number {
//     return this.salary - value.salary;
//   }
// }

// const prog1: Programmer = new Programmer("John", 20000);
// const prog2: Programmer = new Programmer("Alex", 30000);

// prog1.compareTo(prog2) > 0
//   ? console.log(`${prog1.name} is richer`)
//   : prog1.compareTo(prog2) == 0
//   ? console.log(`${prog1.name} and ${prog1.name} earn the same amounts`)
//   : console.log(`${prog1.name} is poorer`);

// class Triangle implements Comparator<Triangle> {
//   compareTo(value: Triangle): number {}
// }

// function printMe<T>(content: T): T {
//   console.log(content);

//   return content;
// }

// const a = printMe("Hello");

// class Person {
//   constructor(public name: string) {}
// }

// const b = printMe(new Person("Joe"));

// const printMe = <T>(content: T): T => {
//   console.log(content);

//   return content;
// };

// const a = printMe("Hello");

// class Person {
//   constructor(public name: string) {}
// }

// const b = printMe(new Person("Joe"));

// const c = printMe<string>("hello");
// const d = printMe<Person>(new Person("Joe"));

// class Pair<K, V> {
//   key: K;
//   value: V;
// }

// class Pair<K, V> {
//   constructor(public key: K, public value: V) {}
// }

// function compare<K, V>(pair1: Pair<K, V>, pair2: Pair<K, V>): boolean {
//   return pair1.key === pair2.key && pair1.value === pair2.value;
// }

// let p1: Pair<number, string> = new Pair(1, "Apple");
// let p2 = new Pair(1, "Orange");

// console.log(compare<number, string>(p1, p2));

// let p3 = new Pair("first", "Apple");
// let p4 = new Pair("first", "Apple");

// console.log(compare(p3, p4));

// interface User {
//   name: string;
//   role: UserRole;
// }

// enum UserRole {
//   Administrator = "admin",
//   Manager = "manager",
// }

// function loadUser<T>(): T {
//   return JSON.parse(`{"name": "john", "role": "admin"}`);
// }

// const user = loadUser<User>();

// switch (user.role) {
//   case UserRole.Administrator:
//     console.log("Show control panel");
//     break;
//   case UserRole.Manager:
//     console.log("Hide control panel");
//     break;
// }

// const outerFunc = (someValue: number) => (multiplier: number) =>
//   someValue * multiplier;

// const innerFunc = outerFunc(10);

// console.log(innerFunc);

// let result = innerFunc(5);

// console.log(result);

// type numFunc<T> = (arg: T) => (c: number) => number;

// const noArgFunc: numFunc<void> = () => (c: number) => c + 5;
// const numArgFunc: numFunc<number> =
//   (someValue: number) => (multiplier: number) =>
//     someValue * multiplier;
// const stringArgFunc: numFunc<string> =
//   (someText: string) => (padding: number) =>
//     someText.length + padding;
// // const createSumstring: numFunc<number> = () => (x: number) => "Hello";

// let temp = noArgFunc();

// temp = numArgFunc(2);

// console.log(temp(5));

// function whoAmI(target: Function): void {
//   console.log(`You are : \n ${target}`);
// }

// @whoAmI
// class Friend {
//   constructor(private name: string, private age: number) {}
// }

// function UIcomponent(html: string) {
//   console.log(`The decorator received ${html} \n`);

//   return function (target: Function) {
//     console.log(`Someone wants to create a UI component from \n ${target}`);
//   };
// }

// @UIcomponent(`<h1>Hello Shopper!</h1>`)
// class Shopper {
//   constructor(private name: string) {}
// }

// type constructorMixin = { new (...args: any[]): {} };

// function useSalutation(salutation: string) {
//   return function <T extends constructorMixin>(target: T) {
//     return class extends target {
//       name: string = "hi";
//       private message = "Hello " + salutation + this.name;

//       sayHello() {
//         console.log(`${this.message}`);
//       }
//     };
//   };
// }

// @useSalutation("Mr. ")
// class Greeter {
//   constructor(public name: string) {}

//   sayHello() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// const grt = new Greeter("Smith");
// grt.sayHello();

// function logTrade(target, key, descriptor) {
//   const originalCode = descriptor.value;

//   descriptor.value = function () {
//     console.log(`Incoked ${key} providing`, arguments);
//   };

//   return descriptor;
// }

// class Trade {
//   @logTrade
//   placeOrder(
//     stockName: string,
//     quantity: number,
//     operation: string,
//     tradedID: number
//   ) {}
// }

// const trade = new Trade();
// trade.placeOrder("IBM", 100, "Buy", 123);

// interface Person {
//   name: string;
//   age: Number;
// }
// const worker: Person = { name: "Jogn", age: 22 };
// function doSturff(person: Readonly<Person>) {
//   person.age = 25;
// }

// interface Person {
//   name: string;
//   age: number;
// }

// const persons: Person[] = [
//   { name: "Jogn", age: 32 },
//   { name: "Mary", age: 33 },
// ];

// function filterBy<T, P extends keyof T>(property: P, value: T[P], array: T[]) {
//   return array.filter((item) => item[property] === value);
// }

// console.log(filterBy("name", "Jogn", persons));
// console.log(filterBy("lastName", "Jogn", persons));
// console.log(filterBy("age", "twenty", persons));

// interface Person {
//   readonly name: string;
//   readonly age: number;
// }

// type Modifiable<T> = {
//   -readonly [P in keyof T]: T[P];
// };

// interface Person {
//   readonly name: string;
//   readonly age: number;
// }

// const worker1: Person = { name: "Jogn", age: 25 };
// worker1.age = 27;

// const worker2: Modifiable<Person> = { name: "John", age: 25 };
// worker2.age = 27;

// interface Person {
//   name: string;
//   age: number;
// }

// const worker1: Required<Person> = { name: "Jogn", age: 5 };
// const worker2: Partial<Person> = { name: "John" };
// const worker1: Readonly<Partial<Person>> = { name: "john" };
// worker1.name = "Mary";

// interface Person {
//   name: string;
//   age: number;
//   address: string;
// }

// type PersonNameAddress<T, K> = Pick<Person, "name" | "address">;

// class Product {
//   id: number;
// }

// const getProducts = function <T>(
//   id?: T
// ): T extends number ? Product : Product[] {
//   if (typeof id === "number") {
//     return { id: 123 } as any;
//   } else {
//     return [{ id: 123 }, { id: 567 }] as any;
//   }
// };

// const result1 = getProducts(123);
// const result2 = getProducts();

// class Person {
//   id: number;
//   name: string;
//   age: number;
// }

// type RemoveProps<T, K> = Exclude<keyof T, K>;
// type RemainingProps = RemoveProps<Person, "name" | "age">;
// type PersonBlindAuditions = Pick<Person, RemainingProps>;

type ReturnPromise<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => Promise<R>
  : T;

type Promisify<T> = {
  [P in keyof T]: ReturnPromise<T[P]>;
};

interface SyncService {
  baseUrl: string;
  getA(): string;
}

class AsyncService implements Promisify<SyncService> {
  baseUrl: string;

  getA(): Promise<string> {
    return Promise.resolve("");
  }
}

let service = new AsyncService();

let result = service.getA();
