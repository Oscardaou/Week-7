let user={name:"oscar",age:30,};
//if we want to chek if this variable exist
console.log("name" in user);
//using variable
//let key="age";
//console.log(key in user);
let klio = {
    name: "John",
    age: 30,
    isAdmin: true
};
//if we want to read an array of users 
for (let key in klio) {
  // keys
  console.log( key +": "+klio[key]);  // name, age, isAdmin
};
//output will be name John    age 30    isAdmin true
//if we have integers number the element will be assorted in an
//assending order
let code={
    "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1": "USA"
};

for(let c in code){
    console.log(c+":"+code[c]);
}
//instead if variable are other then dtring the output 
//eil be generated inn creation order
let naa={
    "Germany" : "49",
   "Switzerland": "41",
   "Great Britain": "44",
   "USA" : "1"
};
for (let a in naa){
    console.log(a+":"+naa[a]);
}