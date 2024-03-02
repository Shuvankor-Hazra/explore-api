const user = { id: 1, name: "Gorib Amir", job: "Actor" };
// JavaScript Object Notation (JSON)
const stringify = JSON.stringify(user);
// console.log(user);
// console.log(stringify);

/*
{ id: 1, name: 'Gorib Amir', job: 'Actor' }
{"id":1,"name":"Gorib Amir","job":"Actor"}
*/

const shop = {
  owner: "Alia",
  address: {
    street: "Kochukhat voot ar goli",
    city: "Ranbir",
    country: "BD",
  },
  product: ["Laptop", "Mic", "Monitor", "Keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
// console.log(shop);
const shopJSON = JSON.stringify(shop);
// console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
