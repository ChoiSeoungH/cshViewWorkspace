let cat = {
  kind: '고양이',
  age: 5,
};
let dog = {
  kind: '개',
  age: 4
};
let rabbit = {
  kind: '토끼',
  age: 0.5
};
let hamster = {
  kind: '햄스터',
  age: 1
};

let pets = [cat, dog, rabbit, hamster, cat];
console.log("==============1===============")
console.log(pets.find(obj => obj.kind === "개"));
console.log("==============2===============")
result = pets.filter(obj => obj.kind !== "고양이");
console.log(result);
console.log("==============2.5===============")
result = pets.filter(obj => obj.kind === "고양이");
console.log(result);
console.log("==============3===============")
result = pets.reduce((a, b) => a+b.age , 0)/pets.length;
console.log(result)
console.log("==============4===============")
// result = pets.map(obj => obj);
result = [...pets].sort((a, b) => b.age - a.age);
console.log(result)
console.log("기본배열 ",pets)
