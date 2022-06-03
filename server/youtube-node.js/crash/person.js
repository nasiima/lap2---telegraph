class Person  {
   constructor(name, age) {
       this.name = name;
       this.age = age;
   }
   
   greeting() {
       console.log(`hey ${this.name} you're ${this.age}`);
}
}




module.exports = Person ;