// fundamentals of javascript
// arrays and objects
// functions return
// async in coding

// 16th march 2025

// alert("Hello World");

var arr = [1, 2, 3, "ajay", {}, [5, 6]];

// console.log(arr);

// arr.forEach((ele,index,arr1)=>{
//     console.log(ele);
//     console.log(index);
//     console.log(arr1);
// });

let b = arr.map((ele, index, arr1) => {
  let temp = {
    index: index,
    value: ele,
  };
  return temp;
});

// console.log(b);

let c = arr.filter((ele, index, arr1) => {
  if (typeof ele == "number") {
    return true;
  }
  return false;
});

let d = arr.find((ele, index, arr1) => {
  if (ele == 2) {
    return true;
  }
  return false;
});

// console.log(c);
// console.log(d);

// let obj1 = {
//     'name' : "jay",
//     'age' : 22,
//     'city' : "surat"
// }

// console.log(obj1);
// console.log(obj1.name);
// console.log(obj1['name']);
// obj1.age = 23;
// console.log(obj1.age);

/* 
Async await 

synconous code -> line by line in order 
async code -> line by line but not in order  means if one line is taking time then it will not wait for that line to complete it will move to next line and execute that line


*/

async function fun1() {
  let user = await fetch("https://randomuser.me/api/");
  let data = await user.json();

  console.log(data);
  console.log("hi");
}

fun1();
