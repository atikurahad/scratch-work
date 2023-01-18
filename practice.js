console.log("hi");

const fish = {
  name: "rahim",
  profession: "farmer",
  age: 33,
  phone: "01974634347",
};

const { name, age,phone } = fish;
console.log(name, age);console.log(phone)

const task = (a ,b=10 ) =>{
  return a + b;
}
console.log(task(5))


let about = `Hi my name is afia.
 I am a web developer.
 i love to eat pizza.`
console.log(about);
