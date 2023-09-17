// classを用いる場合
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const animals = [new Animal('maple', 'sheep'), new Animal('joseph', 'camel')];

animals.map((animal) => {
  console.log(animal.name);
  console.log(animal.type);
});

// そのまま代入？
const _animals = [
  {
    name: 'tama',
    type: 'cat',
  },
  {
    name: 'pochi',
    type: 'dog',
  },
];

_animals.map((animal) => {
  console.log(animal.name);
  console.log(animal.type);
});
