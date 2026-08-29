const users = [
  { id: 1, name: "Alex", age: 25, active: true },
  { id: 2, name: "Elena", age: 32, active: false },
  { id: 3, name: "Leonid", age: 44, active: true },
];

const activeUser = users.filter((n) => n.active === true);
const usersNames = users.map((n) => {
  let result = [];
  result.push(n.name);
  return result;
});

const getAge = (obj) => {
  const { name, age } = obj;
  console.log(`Пользователю ${name} исполнилось ${age} лет`);
};

console.log(getAge({ name: "Жорик", age: 100 }));
