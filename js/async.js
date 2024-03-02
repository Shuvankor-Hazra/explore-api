const myLoader = () => {
  return new Promise((resolved, reject) => {
    const success = Math.random();
    if (success <= 0.5) {
      resolved(success);
    } else {
      reject(success);
    }
  });
};

myLoader()
  .then((data) => console.log("Resolved data", data))
  .catch((err) => console.log("Rejected value with", err));

const url = "";
fetch(url)
  .then((Response) => Response.json())
  .then((json) => console.log(json));

async function loadData() {
  const res = await fetch("");
  const data = await res.json();
  console.log(data);
}
loadData();

// arrow function
const taskLoader = async () => {
  const res = await fetch("");
  const data = await res.json();
  console.log(data);
};
