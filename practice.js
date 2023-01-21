// console.log("hi");

// const fish = {
//   name: "rahim",
//   profession: "farmer",
//   age: 33,
//   phone: "01974634347",
// };

// const { name, age,phone } = fish;
// console.log(name, age);console.log(phone)

// const task = (a ,b=10 ) =>{
//   return a + b;
// }
// console.log(task(5))


// let about = `Hi my name is afia.
//  I am a web developer.
//  i love to eat pizza.`
// console.log(about);


//  const hero = (friends) =>{

//     for (let friend of friends) {
//       if (friend.length % 2 === 0) {
//         console.log(friend);
//       }
//     }
//  }
// hero( ["rakib",'', "abir","shohel","tomal", "nidi", "rahim", "karim", "raza"]
// );

//     console.log(number3)

//     const maxNum =(a)=>{

//    const number1 = [1, 2, 3, 4, 5];
//    const number2 = [6, 7, 8, 9, 10];
//    const number3 = [...number1, ...number2];

//    return Math.max(...a);
//     }
//  maxNum(...number3);

const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
.then(response=> response.json())
.then(data => showUser(data))

function showUser (data){
  // console.log(data);
  for(user of data){
    console.log(user.name)

  }
}
