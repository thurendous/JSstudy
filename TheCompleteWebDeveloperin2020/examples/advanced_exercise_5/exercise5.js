// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

let array01 = [];
const arrayForeach = array.forEach(ele => {
  let username = `${ele["usrename"]}!`;
  // let username = ele;
  // let username = `${ele.username}!`; も同じだ
  array01.push(username);

})
console.log(array01)
// ["john!","becky!","susy!","tyson!"]


//Create an array using map that has all the usernames with a "? to each of the usernames
const newArray = array.map(obj => {
  return `${obj.username}?`;
})
console.log(newArray);


//Filter the array to only include users who are on team: red
const newArray = array.filter(obj => obj.team === "red");



//Find out the total score of all users using reduce
const newArray = array.reduce(accumulator, user => {
  return accumulator + user.score;
}, 0)

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
